export class Customer {
   id!: number;
   firstName!: string;
   lastName!: string;
   email!: string;
   phone_number!: string;
   ville!: string;
   address!: string;
   accessToken!: string;
   refreshToken!: string;
   roles!: string[];
   passWord! :string;
   newPassWord! :string;
   uuid! :string;
  housesNames: string[] = [];

  get id_(): number {
    return this.id;
  }

  set id_(value: number) {
    this.id = value;
  }
  get housesNames_(): string[] {
    return this.housesNames;
  }
  set housesNames_(value: string[]) {
    this.housesNames= value;
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

  get phone_number_(): string {
    return this.phone_number;
  }

  set phone_number_(value: string) {
    this.phone_number = value;
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
