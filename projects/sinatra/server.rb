require 'sinatra'
require 'pry'
require './lib/student.rb'

students = []

get '/' do
	erb :index, :locals => { :students => students }
end

get "/students/:id" do
	student = students.select { |s| s.id == params[:id].to_i }
	erb :show, :locals => { :student => student[0]}
end

put "/students/:id" do
	student = students.select { |s| s.id == params[:id].to_i }
	student[0].name=params[:name]
	student[0].email=params[:email]
	redirect "/students#{params[:id]}"
end

