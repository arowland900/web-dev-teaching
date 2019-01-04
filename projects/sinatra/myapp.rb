require 'sinatra'
require 'pry'
require './lib/student.rb'

students = []

get '/' do
    # erb :index
  erb :index, :locals => { :students => students }
end

# get "/students/:id" do
#     student = students.select { \s\  s.id === params[:id].to_i}
#     erb :show, :locals => { :student => student[0] }
# end

# post "/students" do
#     new_student = Student.new(params[:name])
# end
