const Mailer = require('./utils/mailer')
const Utilities = require('./utils/utilities')

class Notification {
  /**
   *
   * @param {*} loggedMessageObject
   *
   * Holds the logic for sending notifications
   * via the channel
   * Returns the resolved promise from sending an email
   */
  notify (loggedMessageObject) {
    validateEnvironmentVariables()

    let subject = `${loggedMessageObject.severity.toUpperCase()} 
    : ${loggedMessageObject.server} 
    - ${loggedMessageObject.timestamp}
    `

    let body = Utilities.getFormattedHtmlEmailBody(loggedMessageObject)

    let config = {
      host: process.env.MAIL_HOST,
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
      from: process.env.MAIL_SENDER,
      to: process.env.MAIL_RECIPIENTS
    }

    return Mailer.sendMail(subject, body, config)
      .then(data => {
        return {
          notified: true,
          data: data
        }
      })
      .catch(data => {
        return {
          notified: false,
          data: error
        }
      })
  }

  /**
   * Checks for the required variables in
   * the process.env object
   */
  validateEnvironmentVariables () {
    let requiredVariables = [
      'MAIL_HOST',
      'MAIL_USER',
      'MAIL_PASSWORD',
      'MAIL_SENDER',
      'MAIL_RECIPIENTS'
    ]

    requiredVariables.forEach(variable => {
      // Check if any variable is missing
      if (!process.env[variable]) {
        throw new Error(`${variable} is missing in the environment variables`)
      }

      // Check if any variable is empty
      if (process.env[variable] === '') {
        throw new Error(`${variable} is empty in the environment variables`)
      }
    })
  }
}

module.exports = Notification
