import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authors', {path: '/authors'}, function() {
      this.route('books', {path: '/:author_id/books'});
  });
});

export default Router;
