module Api
  module V1
    class StoringsController < ApplicationController
      # before_action :authenticate_user!

      def create
        score = Score.find(storing_params[:score_id])
        storing = current_user.storings.new(score: score, session_type: storing_params[:session_type])
        if storing.save
          render json: { message: "Score added to your collection!" }, status: :created
        else
          render json: { error: "There was an issue adding the score." }, status: :unprocessable_entity
        end
      end

      def destroy
        @storing = Storing.find(params[:id]) # Find the score associated with the current user
        @storing.destroy

        if @storing.destroy
          render json: { message: "Score deleted successfully" }, status: :ok
        else
          render json: { error: "Failed to delete score" }, status: :unprocessable_entity
        end
      end

      private

      def storing_params
        params.require(:storing).permit(:session_type, :score_id)
      end
    end
  end
end
