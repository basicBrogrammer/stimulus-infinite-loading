import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['container'];
  offset = 0;
  _loading = true;

  initialize() {
    console.warn('The Child Controller needs to be initialized with an adapter');
  }

  connect() {
    window.addEventListener('scroll', this.checkScrollHeight, false);
  }

  disconnect() {
    window.removeEventListener('scroll', this.checkScrollHeight, false);
  }

  // hooks that might be useful when working with infinite stimuli
  onReceieved = () => {};
  onLoading = () => {};

  received = ({ comments, hasMore }) => {
    const html = new DOMParser().parseFromString(comments, 'text/html');
    this.containerTarget.insertAdjacentElement('beforeend', html.body);
    this.loading = false;
    this.offset += this.limit;
    this.hasMore = hasMore;
    this.onReceieved();
  };

  loadMore() {
    if (!this.loading) {
      this.loading = true;
      this.adapter.load(this.token);
    }
  }

  checkScrollHeight = () => {
    // if scrolled 80% of document height
    if (
      this.hasMore &&
      !this.loading &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight * 0.8
    ) {
      this.loadMore();
    }
  };

  get loading() {
    return this._loading;
  }
  set loading(value) {
    this._loading = value;
    this.onLoading();
  }

  get token() {
    return this.data.get('token');
  }

  get limit() {
    return parseInt(this.data.get('limit')) || 25;
  }
}
