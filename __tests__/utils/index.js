exports.getEnvVariables = () => {
  let result = {
    MAIL_HOST: 'smtp.gmail.com',
    MAIL_USER: 'noreply@gmail.com',
    MAIL_PASSWORD: 'password',
    MAIL_SENDER: 'noreply@gmail.com',
    MAIL_RECIPIENTS: 'random@gmail.com'
  }

  try {
    let env = fs.readFileSync('./.env').toString()

    env.split('\n').forEach(variable => {
      let [key, value] = variable.split('=')
      result[key.trim()] = value.trim()
    })
  } catch (error) {}

  return result
}
