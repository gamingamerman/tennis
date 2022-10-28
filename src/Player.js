class Player {
    #gender;
    #age;

    constructor(name, gender, date_of_birth, category) {
        this.name = name;
        if (gender !== 'male' && gender !=='female') {
            this.#gender = 'female';
        } else {
            this.#gender = gender
        }
        if (date_of_birth !== null && date_of_birth !== undefined) {
            const [d,m,y] = date_of_birth.split('/');
            this.date_of_birth = new Date(y,m,d);
        }
        this.category = category;
    }

    get gender() {
        return this.#gender;
    }

    get age() {
        let today = new Date();
        let age = today.getFullYear() - this.date_of_birth.getFullYear()
        return age
    }

    category() {
        let today = new Date();
        let age = today.getFullYear() - this.date_of_birth.getFullYear()
        
    }
}

module.exports = Player;