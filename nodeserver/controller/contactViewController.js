const Contact = require('../model/Contacts');


/**
 * returns to the client all contacts
 *
 * @param req
 * @param response
 */
const viewAllContacts = (req, response)=> {
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

module.exports ={
  viewAllContacts
}