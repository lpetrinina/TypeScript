// * Typles - an array with fixed length and ordered with fixed types.

let person: readonly [string, number] = ['Jonh', 24];

let susan: [string, number?] = ['Susan']// can use optional parametars

// * Enums - are not erasable type, instead can use union types or as const object pattern

const ServerResponseStatus = {
    success: 200,
    error: 404,
} as const;

type ServerResponseStatus = typeof ServerResponseStatus[keyof typeof ServerResponseStatus]

// Object.values(ServerResponseStatus).forEach(value => {
//     console.log(value)
// })

interface ServerResponse {
    result: ServerResponseStatus;
    data: string[];
}

function getServerResponse(): ServerResponse {
    return {
        result: ServerResponseStatus.success,
        data: ['first item', 'second item'],
    }
}

const responce = getServerResponse();

// ------------------------------------------------------------------------

const UserRole = {
    Admin: 'Admin',
    Manager: 'Manager',
    Employee: 'Employee',
} as const;

type UserRole = typeof UserRole[keyof typeof UserRole];

type User = {
    id: number;
    name: string;
    role: UserRole;
    contact: [string, string] // tuple: [email, phone]
}

function createUser(user: User): User {
    return user;
}

const user: User = createUser({
    id: 86987,
    name: 'Jane',
    role: UserRole.Manager,
    contact: ['jane@gmail.com', '08954236859']
});


