import Ember from 'ember';
import ViewSupportMixin from '../../../mixins/view-support';
import { module, test } from 'qunit';

module('Unit | Mixin | view support');

// Replace this with your real tests.
test('it works', function(assert) {
  var ViewSupportObject = Ember.Object.extend(ViewSupportMixin);
  var subject = ViewSupportObject.create();
  assert.ok(subject);
});
