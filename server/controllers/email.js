{Email} = require('./models/email');
const _ = require('lodash');

exports.addData = async (req, res) =>{
	try {
		const body = _.pick(req.body, ['email'])
		await new Email(body).save()
		res.send('OK')
	} catch (e) {
		console.log(e);
		res.send('ERR')
	}
}
