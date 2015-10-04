import Ember from 'ember';

var BookTable = Ember.Component.extend({
});

BookTable.reopenClass({
    positionalParams: ['books'],
});

export default BookTable;
