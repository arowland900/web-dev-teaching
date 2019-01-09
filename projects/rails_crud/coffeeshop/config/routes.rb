Rails.application.routes.draw do
  
	get "beans/" => "beans#index"
	get "beans/new" => "beans#new", as: :new_bean
	get "beans/:id" => "beans#show", as: :bean
	post "beans/" => "beans#create"
	get "beans/:id/edit" => "beans#edit", as: :edit_bean
end
