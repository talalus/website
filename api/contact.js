require('dotenv').config()
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

export default {
  path: '/api/contact',
  handler(req, res) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })

    if (req.method !== 'POST') {
      res.end(JSON.stringify({ statusCode: 405, body: 'Method Not Allowed' }))
    }

    const decoder = new StringDecoder('utf-8')
    let payload = ''
    req.on('data', (data) => {
      payload += decoder.write(data)
    })

    req.on('end', async () => {
      payload = JSON.parse(payload)

      try {
        await sendEmail(payload)
        res.end(
          JSON.stringify({
            statusCode: 200,
            body: 'Email sent!'
          })
        )
      } catch (err) {
        res.end(
          JSON.stringify({
            statusCode: 500,
            body: err.message || err
          })
        )
      }
    })
  }
}
