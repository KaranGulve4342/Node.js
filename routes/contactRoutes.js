const express = require("express");
const router = express.Router();

const {getContacts, createContact, getContact, UpdateContact, deleteContact} = require("../controllers/contactController");

router.route('/').get(getContacts).post(createContact);

// router.route('/').post(createContact);

router.route('/:id').get(getContact).put(UpdateContact).delete(deleteContact);

// router.route('/:id').put(UpdateContact);

// router.route('/:id').delete(deleteContact);

module.exports = router;