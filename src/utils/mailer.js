const nodemailer = require('nodemailer')

class Mailer {
  /**
   *
   * @param {Object} config
   *
   * Sends email messages via nodemailer
   */
  static async sendMail (config) {
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

    // Set the mail options
    const mailOptions = {
      from: config.from,
      to: config.to,
      subject: config.subject,
      html: config.body
    }

    // Send the actual mail
    return await transporter.sendMail(mailOptions)
  }
}

module.exports = Mailer
