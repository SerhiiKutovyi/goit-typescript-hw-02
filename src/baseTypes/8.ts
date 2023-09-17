/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/
type Gender = 'male' | 'female';

let myGender: Gender;
myGender = 'female';
myGender = 'male';

console.log(myGender);

export {};
