class Student < ApplicationRecord
  belongs_to :user
  belongs_to :event
  belongs_to :volunteer
end
