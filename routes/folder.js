Email.CategoryRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('folder', params.email_id);
  }
});
