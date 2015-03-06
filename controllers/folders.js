Email.FoldersController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      if (confirm('Click OK to delete this folder')) {
        this.get('model').destroyRecord();
      }
    }
  }
});
