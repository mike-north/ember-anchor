import Ember from 'ember';
import {
  injectConfig
} from './controller-support';

const {
  Mixin,
  run: {
    scheduleOnce
  },
  computed: {
    oneWay
  },
  get,
  $
} = Ember;

export default Mixin.create({
  _anchorConfig: injectConfig(),
  anchorQueryParam: oneWay('_anchorConfig.anchorQueryParam'),

  init() {
    this._super(...arguments);
    let controllerProp = this.get('a') ? 'a' : `controller.${this.get('anchorQueryParam')}`;
    this.addObserver(controllerProp, this, this._onQpChanged);
  },

  _onQpChanged() {
    let controllerProp = !!get(this, 'attrs.a') ? 'a' : `controller.${this.get('anchorQueryParam')}`;
    let elem = $(`[data-anchor="${this.get(controllerProp)}"]`);
    if (!elem) {
      return;
    }
    scheduleOnce('afterRender', this, this._scrollToElemPosition);
  },

  didInsertElement() {
    this._super(...arguments);
    this._scrollToElemPosition();
  },

  _scrollToElemPosition() {
    let qp = this.get('anchorQueryParam');
    let qpVal = this.get(!!get(this, 'attrs.a') ? 'a' : `controller.${qp}`);
    let elem = $(`[data-${qp}="${qpVal}"]`);
    let offset = (elem && elem.offset && elem.offset()) ? elem.offset().top : null;
    if (offset) {
      $('body').scrollTop(offset);
    }
  }
});