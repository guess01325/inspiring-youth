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

 @event1 = Event.create!(name:"Robocop", place: "library", date: 1081986, time: 500, user: @user1 )

 @volunteer1 = Volunteer.create!(First_Name:"Otis", Last_Name: "guess", Email:"guess01325@yahoo.com", Message:"Looking to volunteer sometimes", user: @user1, event: @event1)

 Student.create!(name: "otis guess", address: "195 Garfield ave", contact: 860303, user: @user1, event: @event1, volunteer: @volunteer1)



 puts "#{User.count} users created"
 puts "#{Event.count} Event created"
 puts "#{Volunteer.count} volunteer created"
 puts "#{Student.count} student created"



