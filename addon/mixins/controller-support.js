import Mixin from '@ember/object/mixin';
import { getOwner } from '@ember/application';
import { computed } from '@ember/object';
import { oneWay } from '@ember/object/computed';

export function injectConfig() {
  return computed(function() {
    let owner = getOwner ? getOwner(this) : this.container;
    return owner.lookup('config:ember-anchor');
  });
}

export default Mixin.create({
  anchorQueryParam: oneWay('_anchorConfig.anchorQueryParam'),
  _anchorConfig: injectConfig(),

  init() {
    let qpValue = this.get('anchorQueryParam');
    this.queryParams = qpValue ? [qpValue] : [];
    this._super(...arguments);
  }
});
