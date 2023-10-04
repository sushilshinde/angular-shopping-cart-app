// Define a User class representing a user with authentication-related properties
export class User {
  // Constructor to initialize user properties
  constructor(
    public email: string,      // User's email address
    public id: number,         // User's ID
    private _token: string,    // Private property for the authentication token
    private _tokenExp: Date    // Private property for the token expiration date
  ) {}

  // Getter for the token property
  get token() {
    // Check if the token expiration date is not set or if the current date is after the token expiration date
    if (!this._tokenExp || new Date() > this._tokenExp) {
      return null; // Return null if the token is expired or not set
    }
    return this._token; // Return the token if it is still valid
  }
}

// Define a LocalUser class representing a simplified version of a user for local storage or basic use
export class LocalUser {
  // Constructor to initialize local user properties
  constructor(public id: number, public email: string) {}
}
