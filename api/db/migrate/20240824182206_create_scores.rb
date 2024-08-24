class CreateScores < ActiveRecord::Migration[7.1]
  def change
    create_table :scores do |t|
      t.string :score_pdf
      t.string :name
      t.string :composer
      t.string :score_type
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
