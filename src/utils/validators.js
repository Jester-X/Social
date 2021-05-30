export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)


export const required = (value) => {
    if(value) return undefined
    return 'Field is required'
}

export const maxLength = maxLength => value => {
    if(value.length > maxLength) return `Maximum length is ${maxLength} symbols`
    return undefined
}
export const minLength = minLength => value => {
    if(value.length < minLength) return `Minimum length is ${minLength} symbols`
    return undefined
}

export const isValidEmail = value => {
    return /\S+@\S+\.\S+/.test(value) ? undefined : 'Invalid Email'
}