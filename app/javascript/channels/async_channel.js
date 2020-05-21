import consumer from './consumer';

consumer.subscriptions.create('AsyncChannel', {
  connected() {
    // Called when the subscription is ready for use on the server
    // This should use the current user as the subscrber
    // console.log('AsyncChannel is connected');
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
  }
});
