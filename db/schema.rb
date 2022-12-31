# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_31_000316) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string "name"
    t.string "place"
    t.string "date"
    t.string "time"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "contact"
    t.bigint "user_id", null: false
    t.bigint "event_id", null: false
    t.bigint "volunteer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_students_on_event_id"
    t.index ["user_id"], name: "index_students_on_user_id"
    t.index ["volunteer_id"], name: "index_students_on_volunteer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "volunteers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "message"
    t.bigint "user_id", null: false
    t.bigint "event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_volunteers_on_event_id"
    t.index ["user_id"], name: "index_volunteers_on_user_id"
  end

  add_foreign_key "events", "users"
  add_foreign_key "students", "events"
  add_foreign_key "students", "users"
  add_foreign_key "students", "volunteers"
  add_foreign_key "volunteers", "events"
  add_foreign_key "volunteers", "users"
end
