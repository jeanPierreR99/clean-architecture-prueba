export class ControllerException extends Error {
  constructor(msg: String) {
    super(`${msg} is required.`);
    this.name = "ControllerException";

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ControllerException);
    }
  }
}
