process.env.NODE_ENV = 'test'
const Mailer = require('../src/utils/mailer')
const TestUtilities = require('./utils')
let config = {}

jest.mock('nodemailer')

describe('Mailer', () => {
  // To be run before each test
  beforeEach(() => {
    let env = TestUtilities.getEnvVariables()

    // Reset the config object
    config = {
      host: env.MAIL_HOST,
      user: env.MAIL_USER,
      pass: env.MAIL_PASSWORD,
      from: env.MAIL_SENDER,
      to: env.MAIL_RECEIVERS,
      body: 'The mail body',
      subject: 'Sample Mail'
    }
  })

  // To be run after each test
  afterEach(() => {})

  describe('sendMail', () => {
    test('should return a promise that resolves with an object', async () => {
      let data = await Mailer.sendMail(config)

      expect(data).toHaveProperty('messageId')
    })

    test('should return a promise that rejects with an Error object', async () => {
      config.from = TestUtilities.INVALID_EMAIL

      await expect(Mailer.sendMail(config)).rejects.toThrow()
    })
  })
})
