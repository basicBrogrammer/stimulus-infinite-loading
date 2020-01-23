import consumer from '../channels/consumer';
import InfiniteStimuliController from './infinite_stimuli/base_controller';

export default class extends InfiniteStimuliController {
  static targets = [
    'container',
    'loading',
    'loadingStat',
    'itemsCount',
    'hasMoreStat',
    'requestsStat'
  ];
  numberOfRequests = 0;
  initialize() {
    // Infinite Stimuli
    const controller = this;

    this.adapter = consumer.subscriptions.create(
      { channel: 'ItemsChannel', token: this.token },
      {
        connected() {
          return this.load(controller.token);
        },
        received(data) {
          controller.received(data);
        },
        load: function(token) {
          const { limit, offset } = controller;
          return this.perform('load', { token, limit, offset });
        }
      }
    );
    // Adding Stats to the Demo
    this.numberOfItems = 0;
  }
  onReceieved = () => {
    this.numberOfRequests += 1;
    this.requestsStatTarget.textContent = this.numberOfRequests;
    this.itemsCountTarget.textContent = document.querySelectorAll('.item-card').length;
    this.hasMoreStatTarget.textContent = this.hasMore;
  };

  onLoading = () => {
    this.loadingStatTarget.textContent = this.loading;
    if (this.loading) {
      this.loadingTarget.style.display = 'block';
    } else {
      this.loadingTarget.style.display = 'none';
    }
  };
}
