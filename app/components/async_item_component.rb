# frozen_string_literal: true

class AsyncItemComponent < ActionView::Component::Base
  def initialize(_)
    @items = Item.all
  end
end
