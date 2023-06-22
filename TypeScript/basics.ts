//Core Primitives: string, number, boolean
//More complex types:arrays, objecpts
//Function types, parameters

//Primitives:
//written with lowercase: number, string

// if we write Number or String: this poits at the object number in JS

let age: number;

age = 12
let userName: string;
userName = 'MAX';

let isInstructor: boolean;

isInstructor = true;

//More complex types

let hobbies: string[];//arr of strings
let usersId: number[];//arr of numbers
let isTrueArr: boolean[]; //arr of boolean

hobbies = ['sport', 'chess'];

let person;  //any type-don`t use

person = {
    name: 'Max',
    age: 32
}

//use Aliases
type Person = { //set a type object, but not creating an object
    name: string;
    age: number;
};

let anotherPerson: Person

anotherPerson = {
    name: 'Max',
    age: 32
};

// anotherPerson={
//     isEmployer: true
// }

let people: Person[];   //arr of objs


//type INFERENCE

let course = 'React'
// course = 123

course = '123';

//if we want to allow more than one type: str and num = UNION types

let anotheCourse: string | number
anotheCourse = 123


//Functions & types: functions has types for the parameters, but also has types for the return value

//set the return type: if we dont set it it is inferece

function add(a: number, b: number): number {
    return a + b;
}

//sprecial return type VOID

//Generics

function insertAtBeginning(array: any[], value: any) {
    const newArr = [value, ...array];
    return newArr;
}

const demoArr = [1, 2, 3];

const updateArray = insertAtBeginning(demoArr, -1);//[-1,1,2,3]

//classes

// class Student {
//     firstName: string
//     lastName: string;
//     age: number;
//     private courses: string[];

//     constructor(first: string, last: string, age: number, courses: string[]) {
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.courses = courses;

//     }

//shorthand notation for defining properties and types in the class
class Student {
    // firstName: string
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]) { }

    enrol(courseName: string) {          //add method shorthand syntax
        this.courses.push(courseName)
    }
    listCourses() {
        return this.courses.slice()
    }
}
const student = new Student('Max', 'Schwarz', 32, ['Angular'])
student.enrol('React JS');

// console.log(student.courses); //=> Angular, React JS


//Interfaces - Object types definition

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello');

    },
};

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello');

    }
}


