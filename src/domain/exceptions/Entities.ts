export class NotFoundException extends Error {
  constructor(entitie: string, value: string) {
    super(`${entitie} with ID ${value} not found.`);
    this.name = "NotFoundException";

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotFoundException);
    }
  }
}

export class ConflictException extends Error {
  constructor(entitie: string, value: string) {
    super(`${entitie} ${value} already exists.`);
    this.name = "ConflictException";

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ConflictException);
    }
  }
}
