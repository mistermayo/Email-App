Email.Router.map(function() {
  this.resource('folders', {path: '/'});
  this.resource('folder', {path: ':folder_id'},
    function() {
      this.resource('new-email');


    });
  this.resource('new-folder');
  this.resource('about');
  this.resource('email');
});
