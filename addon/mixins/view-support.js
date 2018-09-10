import Mixin from '@ember/object/mixin';
import { scheduleOnce } from '@ember/runloop';
import { oneWay } from '@ember/object/computed';
import { get } from '@ember/object';
import { injectConfig } from './controller-support';

export default Mixin.create({
  _anchorConfig: injectConfig(),
  anchorQueryParam: oneWay('_anchorConfig.anchorQueryParam'),

  init() {
    this._super(...arguments);
    let controllerProp = this.get('a') ? 'a' : `controller.${this.get('anchorQueryParam')}`;
    this.addObserver(controllerProp, this, this._onQpChanged);
  },

  _onQpChanged() {
    let controllerProp = get(this, 'a') ? 'a' : `controller.${this.get('anchorQueryParam')}`;
    let qp = this.get('anchorQueryParam');
    let elem = document.querySelector(`[data-${qp}="${this.get(controllerProp)}"]`);
    if (!elem) {
      return;
    }
    scheduleOnce('afterRender', this, '_scrollToElemPosition');
  },

  didInsertElement() {
    this._super(...arguments);
    this._scrollToElemPosition();
  },

  _scrollToElemPosition() {
    let qp = this.get('anchorQueryParam');
    let qpVal = this.get(get(this, 'a') ? 'a' : `controller.${qp}`);
    let elem = document.querySelector(`[data-${qp}="${qpVal}"]`);
    let offset = elem && elem.offsetTop;
    if (offset) {
      elem.scrollIntoView();
    }
  }
});
