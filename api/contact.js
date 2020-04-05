require('dotenv').config()
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
    html: `${message}`
  })
  return res
}

module.export = async (req, res) => {
  if (req.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const data = JSON.parse(req.body)
    await sendEmail(data)
    res.json({
      statusCode: 200,
      body: 'Email sent!'
    })
  } catch (err) {
    res.json({
      statusCode: 500,
      body: err.message || err
    })
  }
}
