# frozen_string_literal: true

class Item < ApplicationRecord
  has_many :comments
  accepts_nested_attributes_for :comments
end
