const _ = require('lodash'),
	express = require('express'),
	bodyParser = require('body-parser'),

	{mongoose} = require('./db/mongoose'),
	{Contact} = require('./models/contact'),
	{Email} = require('./models/email'),

	port = process.env.PORT,

 	app = express()



app.use(bodyParser.json())

app.post('/contact', require('./controllers/contact').addData)

app.post('/email', require('./controllers/email').addData)

app.listen(port, () => {
	console.log(`working on port: ${port}`);
})
