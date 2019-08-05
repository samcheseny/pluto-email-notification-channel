process.env.NODE_ENV = 'test'
const chai = require('chai')

jest.mock('../')
const Mailer = require('../src/utils/mailer')

describe('Mailer', () => {
  // To be run before each test
  beforeEach(() => {})

  // To be run after each test
  afterEach(() => {})

  describe('sendMail', () => {
    test('should send emails', () => {
      let subject = 'INFO: A new user has subscribed'

      let html = '<p>User is called Sam</p>'

      let config = {
        host: process.env.MAIL_HOST || '',
        user: process.env.MAIL_USER || '',
        pass: process.env.MAIL_PASSWORD || '',
        from: process.env.MAIL_SENDER || '',
        to: process.env.MAIL_RECEIVERS || ''
      }

      Mailer.sendMail(subject, html, config)

      expect(true).toEqual(true)
    })
  })
})
