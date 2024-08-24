Rails.application.routes.draw do
  get 'profile/show'
  get 'profile/edit'
  get 'profile/update'
  get 'private/test'
  devise_for :users,
    path: '',
    path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      registration: 'signup'
    },
    controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
    }
    resource :profile, only: [:show, :edit, :update]

    namespace :api do
      namespace :v1 do
        resources :scores, only: [:create, :get]
      end
    end
end
