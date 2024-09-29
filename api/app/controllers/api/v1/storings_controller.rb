module Api
  module V1
    class StoringsController < ApplicationController
      # before_action :authenticate_user!

      def create
        score = Score.find(params[:score_id])

        storing = current_user.storings.new(score: score, session_type: params[:session_type])

        if storing.save
          render json: { message: "Score added to your collection!" }, status: :created
        else
          render json: { error: "There was an issue adding the score." }, status: :unprocessable_entity
        end
      end

      private

      # Strong parameters for creating a new storing
      def storing_params
        params.require(:storing).permit(:session_type, :score_id)
      end
    end
  end
end
