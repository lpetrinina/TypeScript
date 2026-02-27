// * Merge interfaces

interface Person {
    name: string;
    getDetails(): string;
}

interface DogOwner {
    dogName: string;
    getDogDetails(): string;
}

interface Person {
    age: number;
}


const person: Person = {
    name: 'Jonh',
    age: 29,
    getDetails() {
        return `Name ${this.name} Age: ${this.age}`
    },
}

// console.log(person.getdetails())

// * Extend interface

interface Employee extends Person {
    id: number
}

const employee: Employee = {
    id: 627954,
    name: 'Jane',
    age: 36,
    getDetails() {
        return `Name ${this.name} Age: ${this.age}, Empolyee ID: ${this.id}`
    }
}

// console.log(employee.getDetails())

interface Manager extends Person, DogOwner {
    managePeople(): void
}

const manager: Manager = {
    name: 'Bob',
    age: 47,
    dogName: 'Rex',

    getDetails() {
        return `Name ${this.name} Age: ${this.age}`
    },

    getDogDetails() {
        return `Dog name ${this.dogName}`
    },

    managePeople() {
        console.log('Managing people...')
    },

}

// console.log(manager.getDetails())
// console.log(manager.getDogDetails())
// manager.managePeople()


