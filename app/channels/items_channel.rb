# frozen_string_literal: true

class ItemsChannel < ApplicationCable::Channel
  def subscribed
    puts "ItemsChannel token: #{params[:token]}"
    stream_from "ItemsChannel:#{params[:token]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def load(data)
    InfiniteItemsJob.perform_later(data['token'], data['limit'], data['offset'])
  end
end
