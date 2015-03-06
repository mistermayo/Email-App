Email.NewFolderController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newFolder = this.store.createRecord('folder', {
        name: this.get('name')
      });
      newFolder.save();
      this.transitionToRoute('folders');
      this.set("name", null);
      this.set("folder", null);
    }
  }
});
