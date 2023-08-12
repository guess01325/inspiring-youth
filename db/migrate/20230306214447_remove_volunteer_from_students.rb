class RemoveVolunteerFromStudents < ActiveRecord::Migration[6.1]
  def change
    remove_reference :students, :volunteer, null: false, foreign_key: true
  end
end
