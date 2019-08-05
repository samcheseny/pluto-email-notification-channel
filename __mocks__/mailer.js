class Mailer {
  constructor () {}

  static async sendMail (subject, html) {
    // Simulate a promise rejection
    if (!html) {
      throw new Error('Unable to send an email')
    }

    let info = {
      messageId: parseInt(Math.random * 1000)
    }

    return info
  }
}

module.exports = Mailer
