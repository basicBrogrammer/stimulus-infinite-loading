class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.references :item, null: false, foreign_key: true
      t.text :message
      t.string :username

      t.timestamps
    end
  end
end
