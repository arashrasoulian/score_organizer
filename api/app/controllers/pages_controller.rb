class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:profile]

  def profile
    render json: current_user
  end
end
