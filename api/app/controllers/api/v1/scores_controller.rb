module Api
  module V1
    class ScoresController < ApplicationController
      before_action :authenticate_user!
      # skip_before_action :verify_authenticity_token

      # skip_before_action :verify_authenticity_token, if: -> { request.format.json? }

      # def index
      #   @scores = current_user.scores
      #   scores_with_images = @scores.map do |score|
      #     if score.image.attached?
      #       score.as_json.merge(score_pdf: url_for(score.image))
      #     else
      #       score.as_json.merge(score_pdf: nil)
      #     end
      #   end
      #   render json: scores_with_images
      # end

      def index
        @scores = current_user.scores
        render json: @scores.map { |score| score_with_urls(score) }
      end



      def create
        @score = current_user.scores.build(score_params)
        if @score.save
          # Storing.create(user: current_user, score: @score, session_type: params[:session_type])
          render json: @score, status: :created
        else
          render json: @score.errors, status: :unprocessable_entity
        end
      end

      private

      def score_params
        params.require(:score).permit(:score_pdf, :name, :composer, :score_type, :image)
      end

      def score_with_urls(score)
        score.as_json.merge(
          image_url: score.image.attached? ? url_for(score.image) : nil,
          score_pdf: score.score_pdf
        )
      end
    end
  end
end
