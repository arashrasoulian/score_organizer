class ProfileController < ApplicationController
  before_action :authenticate_user!

  def show
    render json: current_user
  end

  def edit
    render json: current_user
  end

  def update
    @user = current_user
    if @user.update(user_params)
      render json: { user: @user, message: 'Profile updated successfully.' }, status: :ok
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :bio, :avatar)
  end
end
