class User < ApplicationRecord
  has_secure_password

  has_many :events, dependent: :destroy
  has_many :students, dependent: :destroy
  has_many :volunteers, dependent: :destroy

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
end
