Rails.application.routes.draw do
  
	get "beans/" => "beans#index"
	get "beans/:id" => "beans#show", as: :bean
  
end
