var mongoose = require('mongoose');

var Email = mongoose.model('Email', {
	email: {
		type: Email,
		required: true,
		trim: true
	},
});

module.exports = {Email}
