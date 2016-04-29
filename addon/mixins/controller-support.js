import Ember from 'ember';

const { computed, computed: { oneWay } } = Ember;

export function injectConfig() {
  return computed(function() {
    let owner = Ember.getOwner ? Ember.getOwner(this) : this.container;
    return owner.lookup('config:ember-anchor');
  });
}

export default Ember.Mixin.create({
  anchorQueryParam: oneWay('_anchorConfig.anchorQueryParam'),
  _anchorConfig: injectConfig(),

  init() {
    let qpValue = this.get('anchorQueryParam');
    this.queryParams = qpValue ? [qpValue] : [];
    this._super(...arguments);
  }
});
