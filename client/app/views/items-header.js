import Ember from 'ember';
import ScrollBinderMixin from 'spike-ember-scroll/mixins/scroll-binder';

export default Ember.View.extend(ScrollBinderMixin, {
  tagName: 'header',
  classNames: ['grid-header'],
  classNameBindings: ['isOpaque'],
  isOpaque: false,
  didInsertElement: function() {
    this.bindToScrollEvents();
  },
  willDestroyElement: function() {
    this.unbindFromScrollEvents();
  },
  onScroll: function() {
    if (this.$().offset().top > 5) {
      this.set('isOpaque', true);
    }
    else {
      this.set('isOpaque', false);
    }
  }
});
