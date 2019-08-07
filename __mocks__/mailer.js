class Mailer {
  constructor () {}

  static async sendMail (config) {
    // Simulate a promise rejection
    if (config.user === '') {
      throw new Error('Unable to send an email')
    }

    let info = {
      messageId: parseInt(Math.random * 1000)
    }

    return info
  }
}

module.exports = Mailer
