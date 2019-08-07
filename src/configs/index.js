/**
 * Patterns to be found in the log templates
 */
exports.LOG_TEMPLATE_PATTERNS = {
  MESSAGE: '{{LOG_MESSAGE}}',
  SERVER: '{{LOG_SERVER}}',
  PID: '{{LOG_PID}}',
  FILENAME: '{{LOG_FILENAME}}',
  LINE: '{{LOG_LINE}}',
  TIMESTAMP: '{{LOG_TIMESTAMP}}',
  COLOR: '{{LOG_COLOR}}'
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

/**
 * Color codes for each log level
 */
exports.SEVERITY_COLOR_CODE = {
  emergency: '#dc3545',
  error: '#28a745',
  warning: '#ffc107',
  info: '#4fc08d',
  debug: '#6c757d'
}
