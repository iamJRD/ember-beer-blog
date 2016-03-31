import Ember from 'ember';

export default Ember.Component.extend({
  model(params){
    return this.store.findAll('comment');
  },

  actions: {
    deleteComment(comment){
      this.sendAction('deleteComment', comment);
    },

    updateComment(comment, params){
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined){
          comment.set(key, params[key]);
        }
      });
      comment.save();
      this.transitionTo('post');
    }
  }
});
