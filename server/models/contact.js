var mongoose = require('mongoose');

var Contact = mongoose.model('Contact', {
	fullName: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		trim: true
	},
	phone: {
		type: String,
		required: true,
		trim: true
	},
	service: {
		type: String,
		required: true,
		trim: true
	},
	productType: {
		type: String,
		required: true,
		trim: true
	},
	budgetMin: {
		type: Number,
		required: true,
	},
	budgetMax: {
		type: Number,
		required: true,
	},
	message: {
		type: String,
		required: true,
		trim: true
	},
});

module.exports = {Contact}
