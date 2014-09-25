import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('item', {skip: 0, limit: 50});
  }
});
