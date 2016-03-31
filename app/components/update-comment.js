import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,

  actions: {
    updateCommentForm(){
      this.set('updateCommentForm', true);
    },

    updateComment(comment){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
      };
      this.sendAction('updateComment', comment, params);
      this.set('updateCommentForm', false);
    },
  }
});
