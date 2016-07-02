import Ember from 'ember';
import { initialize } from '../../../initializers/ember-anchor';
import { module, test } from 'qunit';

const { run, Application } = Ember;

let registry, application;

module('Unit | Initializer | ember anchor', {
  beforeEach() {
    run(function() {
      application = Application.create();
      registry = application.registry;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(registry, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
