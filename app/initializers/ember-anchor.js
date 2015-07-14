import config from '../config/environment';

export function initialize(_container, application) {
  const { emberAnchor } = config;
  application.register('config:ember-anchor', emberAnchor, { instantiate: false });
}

export default {
  name: 'ember-anchor',
  initialize: initialize
};
