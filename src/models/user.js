const { nanoid } = require('nanoid');

class User {
    constructor(name, email, birthDate) {
        this.id = nanoid();
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
    }
}

module.exports = User;
