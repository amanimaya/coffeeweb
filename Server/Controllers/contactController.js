const contactService = require(
  "../Services/contactService"
);

const createContact = async (req, res) => {
  try {
    const contact =
      await contactService.createContact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        subject: req.body.subject,
        message: req.body.message,
      });
     

    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts =
      await contactService.getAllContacts();

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getContactById = async (req, res) => {
  try {
    const contact =
      await contactService.getContactById(
        req.params.id
      );

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteContact = async (req, res) => {
  try {
    await contactService.deleteContact(
      req.params.id
    );

    res.status(200).json({
      message: "Message deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  deleteContact,
};