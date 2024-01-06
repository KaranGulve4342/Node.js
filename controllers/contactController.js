const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");


// @desc Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
    // res.status(200).json({"message" : "Get All Contacts"});
});

// @desc Create new contacts
// @route POST /api/contacts
// @access public

const createContact = asyncHandler(async(req, res) => {
    console.log("The req body is :", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandotary");
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
    });

    res.status(201).json(contact);
    // res.status(201).json({"message" : "Create Contact"});
});

// @desc Get Contact
// @route GET /api/contacts/:id
// @access public

const getContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    res.status(200).json(contact);
    // res.status(200).json({"message" : `Get contact for ${req.params.id}`});
});

// @desc Update Contact contacts
// @route PUT /api/contacts/:id
// @access public

const UpdateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        rrq.params.id,
        req.body,
        { new : true }
    );

    res.status(200).json({"message" : `Update contact for ${req.params.id}`});
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public

const deleteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    await Contact.remove();

    res.status(200).json(contact);
    // res.status(200).json({"message" : `Delete contact for ${req.params.id}`});
});

module.exports = { getContacts, createContact, getContact, UpdateContact, deleteContact };