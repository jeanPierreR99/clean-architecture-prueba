export class DatabaseConnectionException extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = "DatabaseConnectionException";

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DatabaseConnectionException);
    }
  }
}

// export class CustomError extends Error {
//   constructor(
//     public readonly statusCode: number,
//     public readonly message: string
//   ) {
//     super(message);
//   }

//   static badRequest(message: string) {
//     return new CustomError(400, message);
//   }
// }
