export class User {
  private id!: number;
  private firstName!: string;
  private lastName!: string;
  private email!: string;
  private telephone!: string;
  private ville!: string;
  private address!: string;
  private accessToken!: string;
  private refreshToken!: string;
  private roles!: string[];
  private passWord! :string;
  private newPassWord! :string;
  private uuid! :string;

  get id_(): number {
    return this.id;
  }

  set id_(value: number) {
    this.id = value;
  }
  get uuid_(): string {
    return this.uuid;
  }

  set uuid_(value: string) {
    this.uuid = value;
  }

  get firstName_(): string {
    return this.firstName;
  }

  set firstName_(value: string) {
    this.firstName = value;
  }
  get passWord_(): string {
    return this.passWord;
  }

  set passWord_(value: string) {
    this.passWord = value;
  }
  get newPassWord_(): string {
    return this.newPassWord;
  }

  set newPassWord_(value: string) {
    this.newPassWord = value;
  }

  get lastName_(): string {
    return this.lastName;
  }

  set lastName_(value: string) {
    this.lastName = value;
  }

  get email_(): string {
    return this.email;
  }

  set email_(value: string) {
    this.email = value;
  }

  get telephone_(): string {
    return this.telephone;
  }

  set telephone_(value: string) {
    this.telephone = value;
  }

  get ville_(): string {
    return this.ville;
  }

  set ville_(value: string) {
    this.ville = value;
  }

  get address_(): string {
    return this.address;
  }

  set address_(value: string) {
    this.address = value;
  }

  get accessToken_(): string {
    return this.accessToken;
  }

  set accessToken_(value: string) {
    this.accessToken = value;
  }

  get refreshToken_(): string {
    return this.refreshToken;
  }

  set refreshToken_(value: string) {
    this.refreshToken = value;
  }

  get roles_(): string[] {
    return this.roles;
  }

  set roles_(value: string[]) {
    this.roles = value;
  }
}
