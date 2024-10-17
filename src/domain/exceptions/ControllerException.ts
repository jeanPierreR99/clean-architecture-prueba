export class ControllerException extends Error {
  constructor(msg: String) {
    super(`${msg}`);
    this.name = "ControllerException";

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ControllerException);
    }
  }
}
