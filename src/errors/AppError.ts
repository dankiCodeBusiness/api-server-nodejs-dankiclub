export class AppError {
  public readonly message: string | object
  public readonly statusCode: number

  constructor(message: string | object, statusCode = 400) {
    if (typeof message === 'object') {
      const { trace, message: error } = message as any
      if (trace) {
        message = { message: error ?? 'Request failed' }
      }
    }
    this.message = message
    this.statusCode = statusCode
  }
}
