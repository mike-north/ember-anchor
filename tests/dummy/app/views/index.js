import Ember from 'ember';
import ViewSupport from 'ember-anchor/mixins/view-support';

const { on, View } = Ember;

export default View.extend(ViewSupport, {
  onScrolledToElement: on('scrolledToElement', element => {
    element.addClass('highlight');
  })
});
