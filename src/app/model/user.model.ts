export class User {
  constructor(
    public email: string,
    public localId: string,
    private _token: string,
    private _expirationDate: Date,
    public favorite?: string[] ,
  ) {}

  get token() {
    if(!this._expirationDate || new Date() > this._expirationDate) {
      return ''
    }
    return this._token

  }
}
