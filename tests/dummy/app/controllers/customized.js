import Ember from 'ember';
import ControllerSupport from 'ember-anchor/mixins/controller-support';

export default Ember.Controller.extend(ControllerSupport, {
  anchorQueryParam: 'custom'
});
