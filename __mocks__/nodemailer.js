const nodemailer = jest.genMockFromModule('nodemailer')
const TestUtilities = require('../__tests__/utils')

nodemailer.createTransport = configObject => ({
  sendMail: async function (mailOptions) {
    if (mailOptions.from === TestUtilities.INVALID_EMAIL) {
      throw new Error('Unable to send email')
    }

    return {
      messageId: parseInt(Math.random() * 1000)
    }
  }
})

module.exports = nodemailer
