var mongoose = require('mongoose');

var Email = mongoose.model('Email', {
	email: {
		type: String,
		required: true,
		trim: true
	},
});

module.exports = {Email}
