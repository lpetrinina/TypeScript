//* Type Predicate

type Student = {
    name: string;
    study: () => void;
};

type User = {
    name: string;
    login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
    return Math.random() > 0.5
        ? { name: 'john', study: () => console.log('Studying') }
        : { name: 'mary', login: () => console.log('Logging in') };
};

const person = randomPerson();

function isStudent(person: Person): person is Student {

    // Variant 1
    // return 'study' in person;

    // Variant 2
    return (person as Student).study !== undefined;
};

if (isStudent(person)) {
    person.study();
} else {
    person.login();
}

// * Descriminated Unions and exhaustive check using the never type

type IncrementAction = {
    type: 'increment';
    amount: number;
    timestamp: number;
    user: string;
};

type DecrementAction = {
    type: 'decrement';
    amount: number;
    timestamp: number;
    user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action) {

    switch (action.type) {
        case 'increment':
            return state + action.amount;
        case 'decrement':
            return state - action.amount;
        default:
            const unexpectedAction: never = action;
            throw new Error(`Unexpected action: ${unexpectedAction}`)
    }

}

const newState = reducer(15, {
    user: 'Jane',
    amount: 5,
    timestamp: 13387784,
    type: 'increment'
});

console.log(newState)