export class LateCheckInValidateError extends Error {
  constructor() {
    super(
      'The check-in can only be validated after 20 minutes of its creation'
    );
  }
}
