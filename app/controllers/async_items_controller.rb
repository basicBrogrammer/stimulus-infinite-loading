# frozen_string_literal: true

class AsyncItemsController < ApplicationController
  def index
    @items = Item.all
  end
end
