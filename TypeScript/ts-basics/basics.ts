let age: number = 24;
age = 12.1

let userName: string;

userName= 'Me';

let isInstructor: boolean = true;

isInstructor = false;

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'Me',
  age: 69
}

let course: string | number = 'React - Complete Guide';

const add = (a: number, b: number) => {
  return a + b;
};

const print = (value: any) => {
  console.log(value)
}

// Generics

const insertAtBeginning<T> = (array: T[], value: T) => {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray)
