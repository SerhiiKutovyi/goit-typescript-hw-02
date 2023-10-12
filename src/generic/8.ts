// /*
//   У вас є тип Form, який містить інформацію про форму, включаючи поле errors.
//   Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.
// */

// type Errors = {
//   email?: string[];
//   firstName?: string[];
//   lastName?: string[];
//   phone?: string[];
// };

// type Form = {
//   email: string | null;
//   firstName: string | null;
//   lastName: string | null;
//   phone: string | null;
//   errors: Errors;
// };

// // Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form

// //============================  1  =============================================

// type Params = Omit<Form, 'errors'>;

// //============================  2  =============================================

// // type Params = Pick<Form, 'email' | 'firstName' | 'lastName' | 'phone'>;

// const data: Params = {
//   email: 'qweqwe@terttr',
//   firstName: 'qwe',
//   lastName: 'qwe',
//   phone: '123123',
// };

// console.log(data);

// export {};

class House {
  constructor(private street: string, private tenants: string[] = []) {}

  public showAddress(this: House) {
    console.log('Address: ' + this.street);
  }

  addTenant(tenant: string) {
    this.tenants.push(tenant);
  }
  public showTenants() {
    console.log(this.tenants);
  }
}

const house = new House('Middle-earth');

house.addTenant('Max');
house.addTenant('Serhii');

house.showAddress();
house.showTenants();
