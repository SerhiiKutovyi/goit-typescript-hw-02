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
  Sunday 
}

const today = Days.Wednesday;

function isWeekend(today: any):void {
  if (today === Days.Saturday || today === Days.Sunday) {
    console.log('вихідний');
    return;
  } else {
    console.log('робочий');
  }
  
}

isWeekend(Days.Tuesday);