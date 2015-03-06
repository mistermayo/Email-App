Email.NewEmailController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var email = this.get('model');
      email.save();

      var controller = this;
      email.get('folder').then(function(folder) {
        folder.save();
        controller.transitionToRoute('folder', folder);
      });
    }
  }
});
