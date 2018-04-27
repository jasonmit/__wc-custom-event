import Controller from '@ember/controller';
import '../web-components/click-counter';

export default Controller.extend({
  counter: 0,
  actions: {
    handleCounterClicked() {
      this.incrementProperty('counter');
    }
  }
});
