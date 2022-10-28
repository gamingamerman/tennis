class Player {
    #gender;
    #age;

    constructor(name, gender, date_of_birth) {
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
    }

    get gender() {
        return this.#gender;
    }

    get age() {
        let today = new Date();
        let age = today.getFullYear() - this.date_of_birth.getFullYear()
        return age
    }

    get category() {
        let today = new Date();
        let age = today.getFullYear() - this.date_of_birth.getFullYear()
        switch (age) {
            case (age < 12):
                return "Benjamin"
                break;
            case (age > 12 && age < 15):
                return "Cadet" 
                break;
            case (age > 16 && age < 19):
                return "Junior"
                break;
            case (age > 20):
                return "Senior"
                break; 
            default:
                return "Error"
                break;
        }
    }
}

module.exports = Player;