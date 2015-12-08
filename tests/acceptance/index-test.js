import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', assert => {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.ok($('body').offset().top < 10, 'Body is scrolled to top');
  });

  click('.third-link');

  andThen(function() {
    assert.equal(currentURL(), '/?a=third');
  });

  click('.second-link');

  andThen(function() {
    assert.equal(currentURL(), '/?a=second');
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
