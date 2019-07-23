{Contact} = require('./models/contact');
const _ = require('lodash');

exports.addData = async (req, res) =>{
	try {
		const body = _.pick(req.body, ['fullName', 'email', 'phone', 'service', 'productType', 'budgetMin', 'budgetMax', 'message'])
		await new Contact(body).save()
		res.send('OK')
	} catch (e) {
		console.log(e);
		res.send('ERR')
	}
}
