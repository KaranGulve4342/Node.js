// @desc Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = (req, res) => {
    res.status(200).json({"message" : "Get All Contacts"});
};

// @desc Create new contacts
// @route POST /api/contacts
// @access public

const createContact = (req, res) => {
    res.status(200).json({"message" : "Create Contact"});
}

// @desc Get Contact
// @route GET /api/contacts/:id
// @access public

const getContact = (req, res) => {
    res.status(200).json({"message" : `Get contact for ${req.params.id}`});
}

// @desc Update Contact contacts
// @route PUT /api/contacts/:id
// @access public

const UpdateContact = (req, res) => {
    res.status(200).json({"message" : `Update contact for ${req.params.id}`});
}

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public

const deleteContact = (req, res) => {
    res.status(200).json({"message" : `Delete contact for ${req.params.id}`});
}

module.exports = { getContacts, createContact, getContact, UpdateContact, deleteContact };