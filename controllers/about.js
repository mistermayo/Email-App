Email.AboutController = Ember.Controller.extend({
  isAboutShowing: false,
  actions: {
    showAbout: function() {
      this.set('isAboutShowing', true);
    },
    hideAbout: function() {
      this.set('isAboutShowing', false);
    }
  }
});
