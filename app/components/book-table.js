import Ember from 'ember';

var BookTable = Ember.Component.extend({
    actions: {
        change(bookId) {
            var selectedBooks = this.get('selectedBooks');
            var index = selectedBooks.indexOf(bookId);
            if (index === -1) {
                selectedBooks.pushObject(bookId);
            } else {
                selectedBooks.removeObject(bookId);
            }
        }
    },
    init() {
        this._super();
        this.set(`selectedBooks`, []);
    },
    didUpdateAttrs() {
        this._super();
        this.set(`selectedBooks`, []);
    },
});

BookTable.reopenClass({
    positionalParams: ['books'],
});

export default BookTable;
