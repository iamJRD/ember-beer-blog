import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteComment(comment){
      comment.destroyRecord();
      this.sendAction('deleteComment', comment);
      this.transitionTo('index');
    }
  }
});
