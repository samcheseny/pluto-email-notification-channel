process.env.NODE_ENV = 'test'
const Channel = require('../src/index')
const fs = require('fs')
const TestUtilities = require('./utils')
let log = {}

jest.mock('../src/utils/mailer')

describe('Channel', () => {
  // To run before each the tests
  beforeEach(() => {
    let env = TestUtilities.getEnvVariables()

    // Set the environment variables
    process.env.MAIL_HOST = env.MAIL_HOST
    process.env.MAIL_USER = env.MAIL_USER
    process.env.MAIL_PASSWORD = env.MAIL_PASSWORD
    process.env.MAIL_SENDER = env.MAIL_SENDER
    process.env.MAIL_RECIPIENTS = env.MAIL_RECIPIENTS

    // Reset the log object
    log = {
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
  })

  // To run after each the tests
  afterEach(() => {})

  test('should send an email', () => {
    expect.assertions(1)
    return Channel.notify(log).then(data => expect(data.notified).toBeTruthy())
  })

  test('should not send an email on invalid auth details', () => {
    expect.assertions(1)

    process.env.MAIL_USER = 'notanemail@gmail.com'

    return Channel.notify(log).then(data => expect(data.notified).toBeFalsy())
  })

  test('should throw an error on a missing env variable', () => {
    delete process.env.MAIL_SENDER

    expect(() => {
      Channel.notify(log)
    }).toThrow()
  })

  test('should throw an error on an empty env variable', () => {
    process.env.MAIL_SENDER = ''

    expect(() => {
      Channel.notify(log)
    }).toThrow()
  })

  test('should throw an error on a missing log property', () => {
    delete log.PID

    expect(() => {
      Channel.notify(log)
    }).toThrow()
  })

  test('should throw an error on an empty log property', () => {
    log.serverName = ''

    expect(() => {
      Channel.notify(log)
    }).toThrow()
  })
})
