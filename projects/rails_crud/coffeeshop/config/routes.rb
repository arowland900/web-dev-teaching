Rails.application.routes.draw do
  
	get "beans/" => "beans#index"
	get "beans/:id" => "beans#show", as: :bean
	get "beans/new" => "beans#new", as: :new_bean
  
end
