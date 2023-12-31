/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити 
  лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

// ==========================  1  ==================================================

// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// }

// function createOrUpdateUser(
//   initialValues: Pick<User,'email' | 'password'>
// ) {
//   // Оновлення користувача
//   return initialValues;
// }
//===========================  2  ===================================================
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): string | undefined {
  if (typeof initialValues === 'string') {
    return initialValues;
  }
}

//===========================  3  ===================================================

// type User = {
//   name?: string;
//   surname?: string;
//   email?: string;
//   password?: string;
// };

// function createOrUpdateUser(initialValues: User) {
//   // Оновлення користувача
// return initialValues;
// }

console.log(
  createOrUpdateUser({ email: 'user@mail.com', password: 'password123' })
);

export {};
