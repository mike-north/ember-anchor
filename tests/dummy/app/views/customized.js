import Ember from 'ember';
import ViewSupport from 'ember-anchor/mixins/view-support';

export default Ember.View.extend(ViewSupport, {
  anchorQueryParam: 'custom'
});
