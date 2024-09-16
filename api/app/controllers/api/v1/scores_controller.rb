module Api
  module V1
    class ScoresController < ApplicationController

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
          render json: @score, status: :created
        else
          render json: @score.errors, status: :unprocessable_entity
        end
      end

      private


      def score_params
        params.require(:score).permit(:score_pdf, :name, :composer, :score_type, :pdf)
      end

      def score_with_urls(score)
        score.as_json.merge(
          pdf_url: score.pdf.attached? ? rails_blob_url(score.pdf) : nil,
          score_pdf: score.score_pdf
        )
      end
    end
  end
end
