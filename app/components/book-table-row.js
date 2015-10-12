import Ember from 'ember';

var BookTableRow = Ember.Component.extend({
    tagName: 'tr',
    actions: {
        select(book) {
            this.attrs.select(book.id);
        }
    }
});

BookTableRow.reopenClass({
    positionalParams: ['book'],
});

export default BookTableRow;
