# frozen_string_literal: true

class ItemComponent < ActionView::Component::Base
  def initialize(item:)
    @item = item
  end

  private

  attr_reader :item
end
