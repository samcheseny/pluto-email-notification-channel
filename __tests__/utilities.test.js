process.env.NODE_ENV = 'test'

const Utilities = require('../src/utils/utilities')
const { LOG_TEMPLATE_PATTERNS } = require('../src/configs')
const log = {
  timestamp: '01-12-2019 10:10:10.900',
  serverName: 'USEASTERN-001',
  PID: parseInt(Math.random() * 1000),
  usedMemory: parseInt(Math.random() * 1000) + 'MB',
  message: 'This is a sample log message',
  logged: 'This is a sample log message',
  line: 12,
  function: 'getAllUsers',
  filename: 'users.js',
  severity: 'info'
}

describe('Utilities', () => {
  // To be run before each test
  beforeEach(() => {})

  // To be run after each test
  afterEach(() => {})

  describe('getFormattedHtmlEmailBody', () => {
    test('should return a string with the patterns replaced', () => {
      let body = Utilities.getFormattedHtmlEmailBody(log)

      expect(body).not.toMatch(LOG_TEMPLATE_PATTERNS.MESSAGE)

      expect(body).not.toMatch(LOG_TEMPLATE_PATTERNS.SERVER)

      expect(body).not.toMatch(LOG_TEMPLATE_PATTERNS.PID)

      expect(body).not.toMatch(LOG_TEMPLATE_PATTERNS.FILENAME)

      expect(body).not.toMatch(LOG_TEMPLATE_PATTERNS.LINE)

      expect(body).not.toMatch(LOG_TEMPLATE_PATTERNS.TIMESTAMP)

      expect(body).not.toMatch(LOG_TEMPLATE_PATTERNS.COLOR)
    })
  })
})
