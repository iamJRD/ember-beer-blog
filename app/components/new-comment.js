import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },

    saveComment() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
        post: this.get('post'),
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment2', params);
    }
  }
});
