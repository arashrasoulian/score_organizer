class CreateStorings < ActiveRecord::Migration[7.1]
  def change
    create_table :storings do |t|
      t.string :session_type
      t.references :user, null: false, foreign_key: true
      t.references :score, null: false, foreign_key: true

      t.timestamps
    end
  end
end
