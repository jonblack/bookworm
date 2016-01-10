"use strict";

var jsonApi = require("jsonapi-server");
var MongoStore = require("jsonapi-store-mongodb");


jsonApi.setConfig({
  protocol: "http",
  hostname: "localhost",
  port: 3000,
  base: "api",
});

var authorsHandler = new MongoStore({
  url: "mongodb://bookworm_mongo_1:27017/bookworm",
});

var booksHandler = new MongoStore({
  url: "mongodb://bookworm_mongo_1:27017/bookworm",
});

jsonApi.define({
  resource: "authors",
  handlers: authorsHandler,
  attributes: {
    name: jsonApi.Joi.string(),
    books: jsonApi.Joi.belongsToMany({
      resource: "books",
      as: "author",
    }),
  },
  examples: [
    {
      id: "3092b4f2-a6b3-42bf-817f-acffffe2d9bc",
      type: "authors",
      name: "Hugh Howey",
    },
  ]
});

jsonApi.define({
  resource: "books",
  handlers: booksHandler,
  attributes: {
    title: jsonApi.Joi.string(),
    author: jsonApi.Joi.one("authors"),
  },
  examples: [
    {
      id: "32fb0105-acaa-4adb-9ec4-8b49633695e1",
      type: "books",
      title: "Wool",
      author: { type: "authors", id: "3092b4f2-a6b3-42bf-817f-acffffe2d9bc" }
    },
    {
      id: "870e28dd-8c9d-4ef7-a9aa-b1064ffa8e64",
      type: "books",
      title: "Dust",
      author: { type: "authors", id: "3092b4f2-a6b3-42bf-817f-acffffe2d9bc" }
    },
    {
      id: "ad3aa89e-9c5b-4ac9-a652-6670f9f27587",
      type: "books",
      title: "Shift",
      author: { type: "authors", id: "3092b4f2-a6b3-42bf-817f-acffffe2d9bc" }
    },
  ]
});


jsonApi.start();


setTimeout(function() {
  authorsHandler.populate(function() { console.log("Loaded authors"); } );
  booksHandler.populate(function() { console.log("Loaded books"); } );
}, 10000);
