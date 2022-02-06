const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const modelTag = require("../config").modelTag;

// Create Schema
const UserSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    mobile: String,
    email: String,
    address1: String,
    city: String,
    state: String,
    country: String,
});


module.exports = mongoose.model(modelTag.user, UserSchema);
