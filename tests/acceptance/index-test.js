// eslint-disable ember/no-global-jquery
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import $ from 'jquery';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async assert => {
    await visit('/');
    assert.equal(currentURL(), '/');
    assert.ok($('body').offset().top < 10, 'Body is scrolled to top');

    await click('.third-link');

    assert.equal(currentURL(), '/?anc=third');

    await click('.second-link');

    assert.equal(currentURL(), '/?anc=second');
  });

  test('visiting /customized', async assert => {
    await visit('/customized');
    assert.equal(currentURL(), '/customized');
    assert.ok($('body').offset().top < 10, 'Body is scrolled to top');

    await click('.third-link');

    assert.equal(currentURL(), '/customized?custom=third');

    await click('.second-link');

    assert.equal(currentURL(), '/customized?custom=second');
  });
});
