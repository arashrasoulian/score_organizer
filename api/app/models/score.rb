class Score < ApplicationRecord
  belongs_to :user
  has_many :storings, dependent: :destroy
  has_many :stored_by_users, through: :storings, source: :user
end
