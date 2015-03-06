Email.Router.map(function() {
  this.resource('folders', {path: '/'});
  this.resource('folder', {path: ':folder_id'},
    function() {
      this.resource('new-email');
      this.resource('email', {path: ':folder_id'});



    });
  this.resource('new-folder');
  this.resource('about');
});
