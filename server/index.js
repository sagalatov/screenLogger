const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mailer = require('./nodemailer')

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static('dist'));

app.post('/v1/send', (req, res) => {
  const message = {
    from: '<reece65@ethereal.email>',
    to: 'sagalatov@mail.ru',
    subject: 'test',
    html: `<img src="${req.body}" alt="img" />`
  }
  mailer(message)

})

app.listen(3000, () => console.log('Listening on port 3000!'))
