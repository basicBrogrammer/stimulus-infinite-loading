# frozen_string_literal: true

class AsyncChannel < ApplicationCable::Channel
  def subscribed
    stream_from SecureRandom.hex
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
