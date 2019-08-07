/**
 * Patterns to be found in the log templates
 */
exports.LOG_PATTERNS = {
  MESSAGE: '{{LOG_MESSAGE}}',
  SERVER: '{{LOG_SERVER}}',
  PID: '{{LOG_PID}}',
  FILENAME: '{{LOG_FILENAME}}',
  LINE: '{{LOG_LINE}}',
  TIMESTAMP: '{{LOG_TIMESTAMP}}'
}

/**
 * Required properties in the received log object
 */
exports.REQUIRED_LOG_PROPERTIES = [
  'timestamp',
  'serverName',
  'PID',
  'usedMemory',
  'message',
  'logged',
  'line',
  'function',
  'filename',
  'severity'
]

/**
 * Required properties in the env object
 */
exports.REQUIRED_ENV_PROPERTIES = [
  'MAIL_HOST',
  'MAIL_USER',
  'MAIL_PASSWORD',
  'MAIL_SENDER',
  'MAIL_RECIPIENTS'
]
