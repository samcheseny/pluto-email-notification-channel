process.env.NODE_ENV = 'test'
const Channel = require('../src/index')
let log = {
  timestamp: '',
  serverName: '',
  PID: '',
  usedMemory: '',
  message: '',
  logged: '',
  line: '',
  function: '',
  filename: '',
  severity: ''
}

describe('Channel', () => {
  // To run before each the tests
  beforeEach(() => {
    // Set the environment variables
    process.env.MAIL_HOST = 'smtp.gmail.com'
    process.env.MAIL_USER = 'ndarasam@gmail.com'
    process.env.MAIL_PASSWORD = '!23qweASD'
    process.env.MAIL_SENDER = 'ndarasam@gmail.com'
    process.env.MAIL_RECIPIENTS = 'samuel.ndara@andela.com'

    // Reset the log object
    log = {
      timestamp: '',
      serverName: '',
      PID: '',
      usedMemory: '',
      message: '',
      logged: '',
      line: '',
      function: '',
      filename: '',
      severity: ''
    }
  })

  // To run after each the tests
  afterEach(() => {})

  test('should send an email', () => {
    expect.assertions(1)
    return Channel.notify(log).then(data => expect(data.notified).toBeTruthy())
  })

  test('should not send an email on invalid auth details', () => {})

  test('should throw an error on a missing env variable', () => {
    delete process.env.MAIL_SENDER

    expect(Channel.notify(log)).toThrow()
  })

  test('should throw an error on an empty env variable', () => {
    process.env.MAIL_SENDER = ''

    expect(Channel.notify(log)).toThrow()
  })

  test('should throw an error on a missing log property', () => {
    delete log.PID

    expect(Channel.notify(log)).toThrow()
  })

  test('should throw an error on an empty log property', () => {
    log.serverName = ''

    expect(Channel.notify(log)).toThrow()
  })
})
