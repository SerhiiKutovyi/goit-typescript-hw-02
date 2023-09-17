/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// ======================== 1й вариант ==================

// enum Days {
//   Monday = 'робочий ',
//   Tuesday = 'робочий ',
//   Wednesday = 'робочий',
//   Thursday = 'робочий ',
//   Friday = 'робочий ',
//   Saturday = 'вихідний',
//   Sunday = 'вихідний',
// }

// function isWeekend(status: Days):void  {
//   console.log(status);
// }

// isWeekend(Days.Tuesday);

// ======================== 2й вариант ==================

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const today = Days.Tuesday;

function isWeekend(day: Days): boolean {
return day === Days.Saturday || day === Days.Sunday;
}

 if (isWeekend(today)) {
   console.log('вихідний');
 } else {
   console.log('робочий');
 }

