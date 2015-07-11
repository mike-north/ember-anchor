import Ember from 'ember';

export default Ember.Mixin.create({
  didInsertElement() {
    this._super(...arguments);
    this._scrollToElemPosition();
  },

  qpObserver: Ember.observer('controller.anchor', function() {
    let elem = Ember.$(`[data-anchor="${this.get('controller.anchor')}"]`);
    if (!elem) {
      return;
    }
    Ember.run.scheduleOnce('afterRender', this, this._scrollToElemPosition);
  }),

  _scrollToElemPosition() {
    let elem = Ember.$(`[data-anchor="${this.get('controller.anchor')}"]`);
    let offset = (elem && elem.offset && elem.offset()) ? elem.offset().top : null;
    if (offset) {
      Ember.$('body').scrollTop(offset);
    }
  }
});
