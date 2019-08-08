const fs = require('fs')
const { LOG_TEMPLATE_PATTERNS, SEVERITY_COLOR_CODE } = require('../configs')

class Utilities {
  /**
   *
   * @param {Object} loggedMessage
   *
   * Fetches an email template and prepares it
   * by replacing the {{}} patterns with values
   *
   */
  static getFormattedHtmlEmailBody (loggedMessage) {
    try {
      // todo: remove hardcoded value and move to config
      let template = fs
        .readFileSync(`../../templates/log-email.html`)
        .toString()

      let logColor =
        SEVERITY_COLOR_CODE[loggedMessage.severity] ||
        SEVERITY_COLOR_CODE['info']

      return template
        .replace(LOG_TEMPLATE_PATTERNS.MESSAGE, loggedMessage.message)
        .replace(LOG_TEMPLATE_PATTERNS.SERVER, loggedMessage.serverName)
        .replace(LOG_TEMPLATE_PATTERNS.PID, loggedMessage.PID)
        .replace(LOG_TEMPLATE_PATTERNS.FILENAME, loggedMessage.filename)
        .replace(LOG_TEMPLATE_PATTERNS.LINE, loggedMessage.line)
        .replace(LOG_TEMPLATE_PATTERNS.TIMESTAMP, loggedMessage.timestamp)
        .replace(LOG_TEMPLATE_PATTERNS.COLOR, logColor)
    } catch (error) {
      return loggedMessage.message
    }
  }
}

module.exports = Utilities
