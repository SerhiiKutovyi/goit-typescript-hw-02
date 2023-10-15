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

// class House {
//   constructor(private street: string, private tenants: string[] = []) {}

//   public showAddress(this: House) {
//     console.log('Address: ' + this.street);
//   }

//   addTenant(tenant: string) {
//     this.tenants.push(tenant);
//   }
//   public showTenants() {
//     console.log(this.tenants);
//   }
// }

// const house = new House('Middle-earth');

// house.addTenant('Max');
// house.addTenant('Serhii');

// house.showAddress();
// house.showTenants();

// class House {
//   private tenants: string[] = [];

//   constructor(private readonly type: string, private street: string) {}

//   public showAddress(this: House) {
//     console.log('Address: ' + this.street);
//   }

//   public showType(this: House) {
//     console.log('House Type' + this.type);
//   }

//   public addTenants(tenant: string) {
//     this.tenants.push(tenant);
//   }

//   public showTenants() {
//     console.log(this.tenants);

//   }
// }

// class StoneHouse extends House {
//   private chargeOfTheHouse: string;

//   constructor(street: string, generalTenant: string) {
//     super('stone', street);

//     this.chargeOfTheHouse = generalTenant;

//     this.addTenants(generalTenant);
//   }

//   public showTenants() {
//     console.log('General: ' + this.chargeOfTheHouse);

//     super.showTenants()

//   };
// }

// const stoneHouse = new StoneHouse('Stone-world', 'Max');

// stoneHouse.showAddress()

// stoneHouse.addTenants('Tany');
// stoneHouse.addTenants('Pepa');

// stoneHouse.showTenants();

// class UseStatic {
//   private static count = 0;

//   constructor() {
//     UseStatic.count += 1
//   }

//   public static itStaticMethod() {
//     console.log('Run static method');

//   }

//   public showCount() {
//     console.log(UseStatic.count);

//   }
// }

// const obji1 = new UseStatic()
// const obji2 = new UseStatic()
// const obji3 = new UseStatic()

// obji1.showCount();

// UseStatic.itStaticMethod();

// abstract class Plane {
//   protected pilotInCabin = false;

//   public sitInPlane(): void {
//     this.pilotInCabin = true;
//   }

//   public abstract startEngine(): boolean;
// }

// class Maize extends Plane {
//   public startEngine() {
//     console.log('Запускаємо винти двигуна.');

//     return true;
//   }
// }

// class Boeing extends Plane {
//   public startEngine(): boolean {
//     console.log(' Розігріваємо реактивні турбіни.');

//     return true;
//   }
// }

// class BrokenPlane extends Plane {}

// interface Person {
//   firstName: string;
//   lastName: string;
//   age?: number;
// }

// const grit = (person:Person) => {
//    console.log(`Hello, ${person.firstName} ${person.lastName}`);

// }

// const max: Person = {
//   firstName: "Max",
//   lastName:'KS'
// }

// grit(max);

interface IPerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user: IPerson;

user = {
  name: 'Anthony',
  age: 21,

  greet(phrase) {
    console.log(phrase + '' + this.name, this.age);
  },
};

user.greet('Вітання всім, я ');
