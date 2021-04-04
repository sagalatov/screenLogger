const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: 'reece65@ethereal.email',
    pass: '4rSGq9WtQFQxQ26Te5'
  }
});

const mailer = message => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err)
    console.log('Email sent: ', info)
  })
}

module.exports = mailer
