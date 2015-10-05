import Ember from 'ember';

var BookTable = Ember.Component.extend({
    selectedBooks: [],
    actions: {
        change(bookId) {
            var selectedBooks = this.get('selectedBooks');
            var index = selectedBooks.indexOf(bookId);
            if (index === -1) {
                selectedBooks.push(bookId);
            } else {
                selectedBooks.splice(index, 1);
            }
            console.log(selectedBooks);
        }
    }
});

BookTable.reopenClass({
    positionalParams: ['books'],
});

export default BookTable;
