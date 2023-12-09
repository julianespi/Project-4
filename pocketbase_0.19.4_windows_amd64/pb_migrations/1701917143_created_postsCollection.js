/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "eqlwws8aw4nc3ld",
    "created": "2023-12-07 02:45:43.245Z",
    "updated": "2023-12-07 02:45:43.245Z",
    "name": "postsCollection",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "k4qo7eud",
        "name": "post",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "sx2ftt2t",
        "name": "field",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 99,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("eqlwws8aw4nc3ld");

  return dao.deleteCollection(collection);
})
