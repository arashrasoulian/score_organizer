module Api
  module V1
    class ScoresController < ApplicationController
      before_action :authenticate_user!
      # skip_before_action :verify_authenticity_token

      # skip_before_action :verify_authenticity_token, if: -> { request.format.json? }

      def index
        @scores = current_user.scores
        render json: @scores
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
        params.require(:score).permit(:score_pdf, :name, :composer, :score_type)
      end
    end
  end
end
