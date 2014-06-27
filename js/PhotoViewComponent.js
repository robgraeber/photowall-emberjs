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