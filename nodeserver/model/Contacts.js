const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var phoneSchema = new Schema({
  number: String,
  type: String,
  primary: Boolean
});

const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: [true, ' First Name is required.']
  },
  lastName: {
    type: String,
    required: [true, 'Last Name.']
  },
  phones: [phoneSchema],
  email: String,
  description: String,

},{usePushEach: true});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
