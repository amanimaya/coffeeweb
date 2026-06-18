const Contact = require("../Models/contactModel");

const createContact = async (data) => {
  return await Contact.create(data);
};

const getAllContacts = async () => {
  return await Contact.find().sort({
    createdAt: -1,
  });
};

const getContactById = async (id) => {
  return await Contact.findById(id);
};

const deleteContact = async (id) => {
  return await Contact.findByIdAndDelete(id);
};

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  deleteContact,
};