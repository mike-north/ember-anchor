import Ember from 'ember';
import ControllerSupportMixin from '../../../mixins/controller-support';
import { module, test } from 'qunit';

module('Unit | Mixin | controller support');

// Replace this with your real tests.
test('it works', function(assert) {
  var ControllerSupportObject = Ember.Object.extend(ControllerSupportMixin);
  var subject = ControllerSupportObject.create();
  assert.ok(subject);
});
