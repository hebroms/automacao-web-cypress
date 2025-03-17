export default class User {
    constructor(name, email, password) {
      this._name = name;
      this._email = email;
      this._password = password;
    }
  
    // Getter e Setter para Name
    get name() {
      return this._name;
    }
  
    set name(newName) {
      if (!newName || typeof newName !== 'string') {
        throw new Error('Nome inválido.');
      }
      this._name = newName;
    }
  
    // Getter e Setter para Email
    get email() {
      return this._email;
    }
  
    set email(newEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(newEmail)) {
        throw new Error('E-mail inválido.');
      }
      this._email = newEmail.toLowerCase();
    }
  
    // Getter e Setter para Password
    get password() {
      return this._password;
    }
  
    set password(newPassword) {
      if (newPassword.length < 8) {
        throw new Error('A senha deve ter pelo menos 8 caracteres.');
      }
      this._password = newPassword;
    }
  }  