class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception, unless: -> { request.format.json? }

  protect_from_forgery with: :null_session
  # include Devise::Controllers::Helpers

end
