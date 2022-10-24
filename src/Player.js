class Player {
    #gender;
    age;

    constructor(name, gender, date_of_birth, age, category) {
        this.name = name;
        if (gender !== 'male' && gender !=='female') {
            this.#gender = 'female';
        } else {
            this.#gender = gender
        }
        if (date_of_birth !== null && date_of_birth !== undefined) {
            const [d,m,y] = date_of_birth.split('/');
            this.date_of_birth = new Date(d,m,y);
        }
        this.age = age;
        this.category = category;
    }

    get gender() {
        return this.#gender;
    }
}

module.exports = Player;