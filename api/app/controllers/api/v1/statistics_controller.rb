class Api::V1::StatisticsController < ApplicationController

  # skip_before_action :authenticate_user!, only: [:index]

      def index
        total_users = User.count
        total_uploaded_scores = Score.count
        render json: {
          total_users: total_users,
          total_uploaded_scores: total_uploaded_scores
        }
      end
end
