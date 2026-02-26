function createEmployee({ id }: { id: number }): { id: number; isActive: boolean } {
    return { id, isActive: id % 2 === 0 }
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });

// Alternative

function createStudent(student: { id: number; name: string }): void {
    console.log(`Welcome to the course ${student.name.toUpperCase()}`);
}

const student = { id: 248, name: 'Susan', email: 'susan@gmail.com' }; //! TypeScript expect references to have at least known props
// createStudent(student);
//createStudent({ id: 249, name: 'Jane', email: 'jane@gmail.com' }); //! TypeScript expect object literals have only known props

// --------------------------------------------------

function processData(input: string | number, config: { reverse: boolean } = { reverse: false }): string | number {

    if (typeof input === 'number') {
        return input ** input
    } else {
        return config.reverse
            ? input.toUpperCase().split('').reverse().join('')
            : input.toUpperCase();
    }
}

const result = processData(10);
const result2 = processData('Ivan', { reverse: true });
// console.log(result, result2)
