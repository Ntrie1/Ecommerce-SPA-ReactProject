const loginValidation = (response) => {
    if (response.message) {
        return [true, response.message]
    }
    return [false, response]
}



export { loginValidation }