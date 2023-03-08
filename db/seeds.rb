    # This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Event.destroy_all
Volunteer.destroy_all
Student.destroy_all

 @user1 = User.create!(username: "guess01325", name: "Otis Guess", email: "guess01325@gmail.com", password: "Gu145012")

 @event1 = Event.create!(name:"Robocop", place: "library", date: "10/81/1986", time: "5:00pm", user: @user1 )

 @volunteer1 = Volunteer.create!(first_name:"Otis", last_name: "guess", email:"guess01325@yahoo.com", message:"Looking to volunteer sometimes", user: @user1, event: @event1)

 @student1 = Student.create!(name: "Otis Guess", address: "195 Garfield ave", contact: "860-303-0187", user: @user1, event: @event1)

 @registered = Registration.create!(first_name: "Otis", last_name: "Guess", email: "guess01325@gmail.com", how_often: "sometimes")


 puts "#{Registration.count} Registration created"
 puts "#{User.count} Users created"
 puts "#{Event.count} Event created"
 puts "#{Volunteer.count} Volunteer created"
 puts "#{Student.count} Student created"



