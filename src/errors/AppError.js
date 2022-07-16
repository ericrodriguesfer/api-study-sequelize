class AppError {
  constructor(message, status = "Bad Request", code = 400) {
    this.message = message;
    this.status = status;
    this.code = code;
  }
}

export default AppError;
