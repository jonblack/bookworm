export default function() {
    this.get('/authors', function(db) {
        var authors = [];
        db.authors.forEach(function(author) {
            var ac = {
                type: 'author',
                id: author.id,
                attributes: author,
                relationships: {
                    books: {
                        data: []
                    }
                }
            };

            db.books.where({
                author_id: author.id
            }).forEach(function(tx) {
                ac.relationships.books.data.push(
                    { type: "book", id: tx.id }
                );
            });

            authors.push(ac);
        });

        return {
            data: authors
        };
    });

    this.get('/books/:book_id', function(db, request) {
        var book_id = request.params.book_id;
        var book = db.books.find(book_id);

        return {
            data: {
                type: 'book',
                id: book.id,
                attributes: book,
            }
        };
    });

    this.get('/authors/:author_id', function(db, request) {
        var author_id = request.params.author_id;
        var author = db.authors.find(author_id);

        return {
            data: {
                type: 'author',
                id: author.id,
                attributes: author,
            }
        };
    });
}
