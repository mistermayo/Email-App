Email.EmailRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('folder', params.folder_id);
  }
});
