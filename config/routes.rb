Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get 'auth/verify', to: 'authentication#verify'
  
  resources :users, only: :create
  # resources :students
  # resources :volunteers
  resources :events do
    resources :volunteers, shallow: true 
      resources :students, shallow: true 
      end

  resources :registrations

  resources :mentorings
  get "tags/data", to: "mentorings#default_values"



    

   
  

    
 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
