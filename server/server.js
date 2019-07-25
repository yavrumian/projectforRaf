const _ = require('lodash'),
    express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),

	{mongoose} = require('./db/mongoose'),
	{Contact} = require('./models/contact'),
	{Email} = require('./models/email'),

	port = process.env.PORT,

 	app = express()

app.set('view engine', 'hbs');

app.use(bodyParser.json())

app.post('/contact', require('./controllers/contact').addData)

app.post('/email', require('./controllers/email').addData)

app.get('/admin', async (req, res) => {
	let contacts = await Contact.find();
	let emails = await Email.find()
	res.render('admin.hbs', {contacts, emails})
})

app.listen(port, () => {
	console.log(`working on port: ${port}`);
})
