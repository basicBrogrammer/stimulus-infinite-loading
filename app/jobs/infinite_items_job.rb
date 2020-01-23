# frozen_string_literal: true

class InfiniteItemsJob < ApplicationJob
  queue_as :default

  def perform(token, limit, offset)
    items = Item.limit(limit).offset(offset)
    has_more = Item.count > limit + offset
    ActionCable.server.broadcast(
      "ItemsChannel:#{token}",
      comments: ItemsController.render(items),
      hasMore: has_more
    )
  end
end
