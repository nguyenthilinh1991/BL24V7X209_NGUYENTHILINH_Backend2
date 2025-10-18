const express = require("express");

const contacts = require("../controllers/contact.controller");

// const router = express.Router();

// router.route("/")
//         .get(contacts.findAll)
//         .post(contacts.create)
//         .delete(contacts.deleteAll)

// router.route("/favorite")
//         .get(contacts.findAllFavorite)

// router.route("/:id")
//         .get(contacts.findOne)
//         .put(contacts.update)
//         .delete(contacts.delete)

// module.exports = router;

const router = express.Router();

router.get("/", contacts.findAll);

router.post("/", contacts.create);

router.delete("/",contacts.deleteAll);

router.get("/favorite", contacts.findAllFavorite);

router.get("/:id", contacts.findOne);

router.put("/:id", contacts.update);

router.delete("/:id", contacts.delete);
module.exports = router;
