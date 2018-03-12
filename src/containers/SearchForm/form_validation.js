export const validate = (values) => {
  const errors = {};

  if (!values.searchTerm) {
    errors.searchTerm = 'Enter a User/Organisation name'
  }

  return errors;
}

export const warn = (values) => {
  const warnings = {};

  const multipleWords = (string) => {
    return values.searchTerm.trim().split(' ').length > 1
  }

  if (values.searchTerm && multipleWords(values.searchTerm)) {
    warnings.searchTerm = "Must be one word"
  }

  return warnings;
}
