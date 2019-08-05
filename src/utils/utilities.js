const fs = require('fs')

class Utilities {
  /**
   *
   * @param {*} loggedMessage
   */
  static getFormattedHtmlEmailBody (loggedMessage) {
    try {
      let template = fs
        .readFileSync(`../../templates/${loggedMessage.severity}.html`)
        .toString()

      // Todo: remove hardcoding and send them to a file
      return template
        .replace('{{LOG_MESSAGE}}', loggedMessage.message)
        .replace('{{LOG_SERVER}}', loggedMessage.server)
        .replace('{{LOG_PID}}', loggedMessage.PID)
        .replace('{{LOG_FILENAME}}', loggedMessage.filename)
        .replace('{{LOG_LINE}}', loggedMessage.line)
        .replace('{{LOG_TIMESTAMP}}', loggedMessage.timestamp)
    } catch (error) {
      return loggedMessage.message
    }
  }
}

module.exports = Utilities
