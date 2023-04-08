class AddTagsToMentorings < ActiveRecord::Migration[7.0]
  def change
    add_column :mentorings, :tags, :text, array: true, default: []
  end
end
