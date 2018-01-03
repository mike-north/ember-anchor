import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

let application;

module('Acceptance | index', {
  beforeEach() {
    application = startApp();
  },

  afterEach() {
    run(application, 'destroy');
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
    assert.equal(currentURL(), '/?anc=third');
  });

  click('.second-link');

  andThen(function() {
    assert.equal(currentURL(), '/?anc=second');
  });
});

test('visiting /customized', assert => {
  visit('/customized');
  andThen(function() {
    assert.equal(currentURL(), '/customized');
    assert.ok($('body').offset().top < 10, 'Body is scrolled to top');
  });

  click('.third-link');

  andThen(function() {
    assert.equal(currentURL(), '/customized?custom=third');
  });

  click('.second-link');

  andThen(function() {
    assert.equal(currentURL(), '/customized?custom=second');
  });
});
