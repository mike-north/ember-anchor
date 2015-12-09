import config from '../config/environment';

export function initialize() {
  const application = arguments[1] || arguments[0];
  const { emberAnchor } = config;
  application.register('config:ember-anchor', emberAnchor, { instantiate: false });
}

export default {
  name: 'ember-anchor',
  initialize: initialize
};
