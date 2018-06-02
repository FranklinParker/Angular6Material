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
/**
 * save a contact
 *
 *
 * @param req
 * @param response
 */
const saveContact = (req, response) => {
  const contactData = req.body;
  if (contactData._id) {
    console.log('id ' + contactData._id);
    Contact.findByIdAndUpdate({_id: contactData._id}, contactData)
      .then((result) => {
        return response.status(200).json({
          success: true,
          result: result
        })
      })
      .catch((err) => {
        return response.status(500).json({
          success: false,
          error: err
        });
      });
  } else {
    const contact = new Contact(contactData);

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
}


module.exports = {
  viewAllContacts,
  saveContact
}