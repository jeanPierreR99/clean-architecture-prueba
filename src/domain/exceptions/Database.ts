export class DatabaseConnectionException extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = "DatabaseConnectionException";

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DatabaseConnectionException);
    }
  }
}
