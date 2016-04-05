import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    committeeLookup() {
      var params = {
        chamber: this.get('chamber', params),
        sub: this.get('sub', params)
      };
      console.log(params);
      this.sendAction('committeeLookup', params);
    }
  }
});
