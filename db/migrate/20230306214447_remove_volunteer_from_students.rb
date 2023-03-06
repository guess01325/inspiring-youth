class RemoveVolunteerFromStudents < ActiveRecord::Migration[7.0]
  def change
    remove_reference :students, :volunteer, null: false, foreign_key: true
  end
end
