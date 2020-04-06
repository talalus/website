require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const StringDecoder = require('string_decoder').StringDecoder
const { MG_API_KEY, MG_DOMAIN, CONTACT_EMAIL } = process.env
const mailgun = require('mailgun.js')
const mg = mailgun.client({
  username: 'api',
  key: MG_API_KEY
})

async function sendEmail({ name, phone, email, message }) {
  const res = await mg.messages.create(MG_DOMAIN, {
    from: `${name} <${email}>`,
    to: CONTACT_EMAIL,
    subject: `${name} - ${phone}`,
    text: `${message}`,
    html: `<div style="white-space: pre-wrap; word-break: break-word">${message}</div>`
  })
  return res
}

app.post('/api/contact', async (req, res) => {
  try {
    await sendEmail(req.body)
    res
      .status(200)
      .json({ statusCode: 200, body: 'Email sent!' })
      .end()
  } catch (err) {
    res
      .status(500)
      .json({
        statusCode: 500,
        body: err.message || err
      })
      .end()
  }
})

module.exports = app
