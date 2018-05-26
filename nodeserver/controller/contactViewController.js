const Contact = require('../model/Contacts');


/**
 * returns to the client all contacts
 *
 * @param req
 * @param response
 */
const viewAllContacts = (req, response) => {
  Contact.find()
    .exec(function (error, contacts) {
      if (error) {
        return response.status(500).json({
          success: false,
          error: error
        });
      }
      console.log("contact:" + JSON.stringify(contacts));
      response.status(200).json({
        success: true,
        records: contacts
      });
    });
}

const saveContact = (req, response) => {
  const contactData = req.body;
  const contact = new Contact({
    firstName: contactData.firstName,
    lastName: contactData.lastName,
    email: contactData.email,
    phones: [],
    description: contactData.description

  });
  const phones = contactData.phones;
  phones.forEach((phone) => {
    const phoneRec = {
      number: phone.number,
      type: phone.type,
      primary: phone.primary
    };
    contact.phones.push(phoneRec);

  });
  contact.save()
    .then((result) => {
      console.log('contact save result', result);
      return response.status(200).json({
        success: true,
        result: result
      });
    }, (e) => {
      console.log('error saving contact', e);
      return response.status(500).json({
        success: false,
        error: e
      });
    });
}



module.exports = {
  viewAllContacts,
  saveContact
}