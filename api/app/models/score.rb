class Score < ApplicationRecord
  belongs_to :user
  has_many :storings, dependent: :destroy
  has_many :stored_by_users, through: :storings, source: :user
  has_one_attached :pdf
  # validates :score_pdf, presence: true, format: { with: URI::regexp, message: "must be a valid URL" }
end
