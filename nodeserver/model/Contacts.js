
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: [true, ' First Name is required.']
    },
    lastName: {
        type: String,
        required: [true, ' Last Name.']
    },
    apartmentNumber: String,
    cellPhone: String
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
