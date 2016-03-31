import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('post');
  },

  actions: {
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('admin');
    },

    // destroyPost(post) {
    //   post.destroyRecord();
    //   this.transitionTo('admin');
    // }
  }
});
