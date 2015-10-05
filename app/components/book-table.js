import Ember from 'ember';

var BookTable = Ember.Component.extend({
    tableSelections: Ember.inject.service('table-selections'),
    actions: {
        change(bookId) {
            var author = this.get('author');
            var tableSelections = this.get('tableSelections');
            if (tableSelections.isSelected(author.id, bookId)) {
                tableSelections.remove(author.id, bookId);
            } else {
                tableSelections.add(author.id, bookId);
            }
        }
    },
});

BookTable.reopenClass({
    positionalParams: ['author', 'books'],
});

export default BookTable;
