import Ember from 'ember';


export default Ember.Route.extend({


  actions: {
  committeeLookup(params) {
      this.transitionTo('committeelink', params.chamber);
    },
  }
});
