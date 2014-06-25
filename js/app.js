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
  photos: photos.data.slice(0,80)
});
App.PhotoViewComponent = Ember.Component.extend({
  classNames: ['photoImg'],
  tagName: 'img',
  attributeBindings:['src'],
  src: null,
  didInsertElement: function(){
    this.$().on('error', function(e){
        return this.imgError(e);
    }.bind(this));
    animateCheck(this.$()[0]);
  },
  imgError:function(e){
    e.target.style.display = 'none';
  },
});

var isScrolledIntoView = function(el){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(el).offset().top;
    var elemBottom = elemTop + $(el).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};
var animateCheck = function(el){
  if(isScrolledIntoView(el)){
    TweenMax.from(el, 1.2, {rotationY:500, scale:0.1, ease:Power1.easeOut});
  }
};
// var AppView = Backbone.View.extend({
//   className:"appView",
//   initialize: function(){
//     var photoWallModel = new Backbone.Model({
//       photos: this.model.get("photos")
//     });
//     this.photoWall = new PhotoWall({model:photoWallModel});
//   },
//   render:function(){
//     return this.$el.html(this.photoWall.render());
//   }
// });

// $(function(){
//   var appModel = new Backbone.Model({ photos:photos.data });
//   var appView = new AppView({model:appModel});
//   $('#main_region').append(appView.render());
// });