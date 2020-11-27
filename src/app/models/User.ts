
export class User {
  id: number;
  name: String;
  username: String;
  email: String;
  password: String;
  structureAttached: number [];
  User( name: string,username: string,email: String,password: String,
        structureAttached: number []) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.structureAttached= structureAttached;
  }
}
