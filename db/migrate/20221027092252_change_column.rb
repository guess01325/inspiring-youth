class ChangeColumn < ActiveRecord::Migration[6.1]
  def change
    change_column :events, :date, :string
    change_column :events, :time, :string
    change_column :students, :contact, :string


  end
end
