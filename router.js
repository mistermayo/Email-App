Email.Router.map(function() {
  this.resource('folders', {path: '/'});
  this.resource('folder', {path: ':folder_id'},
    function() {
      this.resource('new-email');
      // this.resource('item');
    });
  this.resource('new-folder');
  this.resource('email', {path: ':email_id'});
});
