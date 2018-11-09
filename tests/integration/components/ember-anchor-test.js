import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember anchor', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{ember-anchor}}`);

    assert.equal(this.element.innerText.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#ember-anchor}}
        template block text
      {{/ember-anchor}}
    `);

    assert.equal(this.element.innerText.trim(), 'template block text');
  });
});
