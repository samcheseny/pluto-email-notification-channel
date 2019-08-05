const nodemailer = require('nodemailer')

class Mailer {
  constructor () {}

  /**
   *
   * @param {*} subject
   * @param {*} body
   * @param {*} config
   *
   * Sends email messages via nodemailer
   */
  static async sendMail (subject, body, config) {
    // Create a transport object
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: 465,
      secure: true,
      auth: {
        user: config.user,
        pass: config.pass
      }
    })

    const mailOptions = {
      from: config.from,
      to: config.to,
      subject: subject,
      html: body
    }

    return await transporter.sendMail(mailOptions)
  }
}

module.exports = Mailer
