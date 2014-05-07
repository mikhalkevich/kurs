var mongoose = require('../config/mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    optionblock: {
        type: String,
        required: true
    },
    body: {
        type: String,
    },
    userid: {
        type: String,
        required: true,
    }
});

exports.usertexts = mongoose.model('usertexts', schema);