const mongoose = require('mongoose'),
    Schema = mongoose.Schema; 

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
}); 

module.exports = mongoose.model('User', UserSchema);


