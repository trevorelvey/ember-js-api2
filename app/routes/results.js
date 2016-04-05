import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=aecc85c4e48b47efb4ec5a590c0c3c14&zip=' + params.zip;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
