var App = Ember.Application.create();
App.ApplicationController = Ember.Controller.extend({
  firstName: "Tom",
  lastName: "Brandt"
});
// App.Router.map(function(){
//   this.route('contributors');
// });
// App.IndexRoute = Ember.Route.extend({

// });
App.IndexController = Ember.Controller.extend({
  title:"The is the index controller",
  photos:  Ember.A(photos.data.slice(0,80)),
  init:function(){
    this._super();
    $(window).scroll(function(){
      var topHeight = $("body").height() - window.innerHeight;
      if(topHeight - $(window).scrollTop() < 1000){
        console.log("load more");
        var len = this.photos.length;
        this.photos.pushObjects(photos.data.slice(len, len+15));
      } 
    }.bind(this));
  }
});