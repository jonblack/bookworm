import Ember from 'ember';

var BookTableRow = Ember.Component.extend({
    tagName: 'tr',
});

BookTableRow.reopenClass({
    positionalParams: ['book'],
});

export default BookTableRow;
