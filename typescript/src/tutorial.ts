// import './type-annotations';
// import './union-type';
// import './arrays-and-objects';
// import './functions';
// import './optional-default-and-rest-params';
// import './objects-as-params';
// import './type-alias-and-intersection-type';
import './fetch-data.ts'

import newStudent, { person, sayHellow, type Student } from './modules.ts';

sayHellow('TypeScript')
console.log(newStudent)

const anotherStudent: Student = {
    name: 'Jane',
    age: 35
}




