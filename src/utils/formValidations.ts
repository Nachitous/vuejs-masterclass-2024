export const validateEmail = (email: string) => {
  const trimmedEmail = email.trim()
  if (!trimmedEmail) return []

  const errors = []

  const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
  const isValidEmailFormat = emailRegex.test(trimmedEmail)

  if (!isValidEmailFormat) errors.push('Not a valid email format')

  return errors
}

export const validatePassword = (password: string) => {
  if (!password) return []

  return []
}
