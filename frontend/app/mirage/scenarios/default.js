export default function(server) {
  server.createList('author', 5).forEach(function(author) {
      server.createList('book', 5, {
          author_id: author.id,
      });
  });
}
