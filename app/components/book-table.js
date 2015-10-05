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
            console.log(selectedBooks);
        }
    },
    init() {
        this.set(`selectedBooks`, Ember.A([]));
        this._super();
    },
    didUpdateAttrs() {
        this.set(`selectedBooks`, Ember.A([]));
        this._super();
    },
});

BookTable.reopenClass({
    positionalParams: ['books'],
});

export default BookTable;
