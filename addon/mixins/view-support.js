import Ember from 'ember';
import { injectConfig } from './controller-support';

const { computed: { oneWay } } = Ember;

export default Ember.Mixin.create({
  _anchorConfig: injectConfig(),
  anchorQueryParam: oneWay('_anchorConfig.anchorQueryParam'),

  init() {
    this._super(...arguments);
    let controllerProp = `controller.${this.get('anchorQueryParam')}`;
    this.addObserver(controllerProp, this, this._onQpChanged);
  },

  _onQpChanged() {
    let controllerProp = `controller.${this.get('anchorQueryParam')}`;
    let elem = Ember.$(`[data-anchor="${this.get(controllerProp)}"]`);
    if (!elem) {
      return;
    }
    Ember.run.scheduleOnce('afterRender', this, this._scrollToElemPosition);
  },

  didInsertElement() {
    this._super(...arguments);
    this._scrollToElemPosition();
  },

  _scrollToElemPosition() {
    let qp = this.get('anchorQueryParam');
    let qpVal = this.get(`controller.${qp}`);
    let elem = Ember.$(`[data-${qp}="${qpVal}"]`);
    let offset = (elem && elem.offset && elem.offset()) ? elem.offset().top : null;
    if (offset) {
      Ember.$('body').scrollTop(offset);
    }
  }
});
