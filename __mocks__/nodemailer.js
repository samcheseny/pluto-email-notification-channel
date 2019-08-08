const nodemailer = jest.genMockFromModule('nodemailer')

nodemailer.createTransport = configObject => ({
  sendMail: async function (mailOptions) {
    // Todo: remove hardcoding and place in configs, do the same in
    // mailer mock
    if (mailOptions.from === 'notanemail@gmail.com') {
      throw new Error('Unable to send email')
    }

    return {
      messageId: parseInt(Math.random() * 1000)
    }
  }
})

module.exports = nodemailer
