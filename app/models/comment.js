import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  posts: DS.belongsTo('post', {async: true})
});
