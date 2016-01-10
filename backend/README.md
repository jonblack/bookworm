# API

## Authors

### Get

curl -v -H "Content-Type: application/vnd.api+json" 0.0.0.0:3000/api/authors

### Add

curl -v -H "Content-Type: application/vnd.api+json" 0.0.0.0:3000/api/authors -d '{"data": { "attributes": { "name": "Hugh Howey" } } }'

### Delete

curl -v -H "Content-Type: application/vnd.api+json" -X DELETE 0.0.0.0:3000/api/authors/:id

## Books

### Get

curl -v -H "Content-Type: application/vnd.api+json" 0.0.0.0:3000/api/books

### Add

curl -v -H "Content-Type: application/vnd.api+json" 0.0.0.0:3000/api/books -d '{"data": { "attributes": { "title": "Wool" }, "relationships": { "author": { "data": { "type": "authors", "id": "<id>" } } } } }'

### Delete

curl -v -H "Content-Type: application/vnd.api+json" -X DELETE 0.0.0.0:3000/api/books/:id
