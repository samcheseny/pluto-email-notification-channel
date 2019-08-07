const fs = require('fs')
const { LOG_PATTERNS } = require('../configs')

class Utilities {
  /**
   *
   * @param {Object} loggedMessage
   */
  static getFormattedHtmlEmailBody (loggedMessage) {
    try {
      let template = fs
        .readFileSync(`../../templates/${loggedMessage.severity}.html`)
        .toString()

      return template
        .replace(LOG_PATTERNS.MESSAGE, loggedMessage.message)
        .replace(LOG_PATTERNS.SERVER, loggedMessage.serverName)
        .replace(LOG_PATTERNS.PID, loggedMessage.PID)
        .replace(LOG_PATTERNS.FILENAME, loggedMessage.filename)
        .replace(LOG_PATTERNS.LINE, loggedMessage.line)
        .replace(LOG_PATTERNS.TIMESTAMP, loggedMessage.timestamp)
    } catch (error) {
      return loggedMessage.message
    }
  }
}

module.exports = Utilities
