class User {
    constructor(_firstName, _lastName, _age, _location){
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this._location = _location;
    }

    compare(otherUser){
        if (this.age > otherUser.age){
            console.log(`${this.firstName} ${this.lastName} è più vecchio di ${otherUser.firstName} ${otherUser.lastName}.`)
        } else if (this.age < otherUser.age) {
            console.log(`${this.firstName} ${this.lastName} è più giovane di ${otherUser.firstName} ${otherUser.lastName}.`)
        } else {
            console.log(`${this.firstName} ${this.lastName} e ${otherUser.firstName} ${otherUser.lastName} hanno la stessa età.`)
        }
    }
}

let user1 = new User("gino", "strada", 32, "mantova");
let user2 = new User("lino", "banfi", 55, "roma");
let user3 = new User("paolo", "raimondi", 32, "castellabbate");

// Use cases
// user2.compare(user1);
// user1.compare(user2);
// user1.compare(user3);

