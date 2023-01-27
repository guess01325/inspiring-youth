class Volunteer < ApplicationRecord
  belongs_to :user
  belongs_to :event
  has_many :students
  # , through: :events
end
