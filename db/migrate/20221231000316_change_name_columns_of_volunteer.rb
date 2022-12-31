class ChangeNameColumnsOfVolunteer < ActiveRecord::Migration[7.0]
  def change
    change_table(:volunteers) do |t|
      t.rename(:First_Name, :first_name)
      t.rename(:Last_Name, :last_name)
      t.rename(:Email, :email)
      t.rename(:Message, :message)
      
    
    end
  end
end
