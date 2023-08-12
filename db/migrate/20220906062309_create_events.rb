class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :place
      t.integer :date
      t.integer :time
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
