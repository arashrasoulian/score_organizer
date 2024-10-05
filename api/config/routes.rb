Rails.application.routes.draw do
  get "profile/show"
  get "profile/edit"
  get "profile/update"
  get "private/test"
  devise_for :users,
    path: "",
    path_names: {
      sign_in: "login",
      sign_out: "logout",
      registration: "signup",
    },
    controllers: {
      sessions: "users/sessions",
      registrations: "users/registrations",
    }
  namespace :api do
    namespace :v1 do
      get "statistics", to: "statistics#index"
      get "scores/home_page_data", to: "scores#home_page_data"
    end
  end
  resource :profile, only: [:show, :edit, :update]

  namespace :api do
    namespace :v1 do
      resources :scores, only: [:index, :create, :get, :show, :destroy]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :storings, only: [:create , :destroy]
    end
  end
end
