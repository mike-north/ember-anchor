import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

let application;

module('Acceptance | index', {
  beforeEach() {
    application = startApp();
  },

  afterEach() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', assert => {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.ok($('body').offset().top < 10, 'Body is scrolled to top');
  });

  click('.third-link');

  andThen(function() {
    assert.equal(currentURL(), '/?anchor=third');
  });

  click('.second-link');

  andThen(function() {
    assert.equal(currentURL(), '/?anchor=second');
  });
});
