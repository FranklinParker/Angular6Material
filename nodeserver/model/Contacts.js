const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const phoneSchema = new Schema({
  number: String,
  type: String,
  primary: Boolean
});

const invoiceLineSchema = new Schema({
  amount: Number,
  itemDescription: String
});



const historySchema = new Schema({
  date: Date,
  description: String,
  invoiceLines: [invoiceLineSchema]
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
  history: [historySchema],
  email: String,
  description: String,

},{usePushEach: true});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
