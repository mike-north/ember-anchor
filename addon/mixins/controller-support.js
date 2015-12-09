import Ember from 'ember';
import _computed from 'ember-new-computed';

const { computed: { oneWay } } = Ember;

export function injectConfig() {
  return _computed({
    get() {
      return this.container.lookup('config:ember-anchor');
    }
  });
}

export default Ember.Mixin.create({
  anchorQueryParam: oneWay('_anchorConfig.anchorQueryParam'),
  _anchorConfig: injectConfig(),

  init() {
    this._super(...arguments);
    Ember.run.next(() => {
      this.set(this.get('anchorQueryParam'), undefined);
    });
  },

  queryParams: _computed('anchorQueryParam', {
    get() {
      let qpValue = this.get('anchorQueryParam');
      return Ember.A(qpValue ? [qpValue] : []);
    }
  })
});
