export default class Validator {
  constructor(nickname) {
    this.nickname = nickname;
  }

  validateUsername() {
    return (/[\w_-]/.test(this.nickname)) && (/^[a-z]/i.test(this.nickname)) && (/[a-z]$/i.test(this.nickname)) && !(/\d{4,}/.test(this.nickname));
  }
}
