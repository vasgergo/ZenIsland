export class User {
  id: string;
  username: string;
  email: string;
  admin: boolean;

  constructor(id: string, username: string, email: string, admin: boolean = false) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.admin = admin
  }

  toObject() {
    return JSON.parse(JSON.stringify(this));
  }


}
