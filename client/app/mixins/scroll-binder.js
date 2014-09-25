import Ember from 'ember';

export default Ember.Mixin.create({
  bindToScrollEvents: function() {
    var self = this;
    var _onScroll = function() {
      self.onScroll();
    };
    Ember.$(document).on('touchmove', _onScroll);
    Ember.$(window).on('scroll', _onScroll);
  },
  unbindFromScrollEvents: function() {
    Ember.$(window).off('scroll');
    Ember.$(document).off('touchmove');
  },
  onScroll: Ember.$.noop
});
