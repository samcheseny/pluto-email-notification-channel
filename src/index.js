const Mailer = require('./utils/mailer')
const Utilities = require('./utils/utilities')
const {
  REQUIRED_ENV_PROPERTIES,
  REQUIRED_LOG_PROPERTIES
} = require('./configs')

class Channel {
  /**
   *
   * @param {Object} loggedMessageObject
   *
   * Holds the logic for sending notifications
   * via the channel
   * Returns the resolved promise from sending an email
   */
  static notify (loggedMessageObject) {
    this.validateEnvObject()
    this.validateLogObject(loggedMessageObject)

    let subject = `${loggedMessageObject.severity.toUpperCase()} 
    : ${loggedMessageObject.serverName} 
    - ${loggedMessageObject.timestamp}`

    let config = {
      host: process.env.MAIL_HOST,
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
      from: process.env.MAIL_SENDER,
      to: process.env.MAIL_RECIPIENTS,
      body: Utilities.getFormattedHtmlEmailBody(loggedMessageObject),
      subject
    }

    return Mailer.sendMail(config)
      .then(data => {
        return {
          notified: true,
          data: data
        }
      })
      .catch(error => {
        return {
          notified: false,
          data: error
        }
      })
  }

  /**
   * Checks for the required properties in
   * the process.env object
   */
  static validateEnvObject () {
    REQUIRED_ENV_PROPERTIES.forEach(property => {
      // Check if any variable is missing
      if (!process.env[property]) {
        throw new Error(`${property} is missing in the environment variables`)
      }

      // Check if any variable is empty
      if (process.env[property] === '') {
        throw new Error(
          `${property} does not have a value in the environment variables`
        )
      }
    })
  }

  /**
   *
   * @param {Object} logObject
   *
   * Checks for the required properties in
   * the received log object
   */
  static validateLogObject (logObject) {
    REQUIRED_LOG_PROPERTIES.forEach(property => {
      // Check if any variable is missing
      if (!logObject[property]) {
        throw new Error(`${property} is missing in the received log object`)
      }

      // Check if any variable is empty
      if (logObject[property] === '') {
        throw new Error(
          `${property} does not have a value in the received log object`
        )
      }
    })
  }
}

module.exports = Channel
