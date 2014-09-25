import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  blurb: DS.attr('string'),
  twitter: DS.attr('string'),
  likes: DS.attr('number')
});
