console.log("This is a typescript file!!!");

type StringArray = string[];

interface User {
    name: string;
    id: number;
    greet(): string;
  }




let arr:string[] = ["dsds","jjj"]
let userName = "Jane";  // type: string
let userID = 10;  // type: number
let uniqueID = userName + userID;


const user: User = {
    name: 'Alice',
    id: 1,
    greet() {
      return `Hello, my name is ${this.name}`;
    },
  };
interface GetGreetingFn{
    (user:User):string
}

  const getGreeting: GetGreetingFn = (user: User) => {
    return user.greet();
  };
  
  console.log(getGreeting(user)); // "Hello, my name is Alice"

  interface Employee extends User {
    salary: number;
  }

  class Manager implements Employee {
    name: string;
    id: number;
    salary: number;
  
    constructor(name: string, id: number, salary: number) {
      this.name = name;
      this.id = id;
      this.salary = salary;
    }
  
    greet() {
      return `Hi, my name is ${this.name} and I am the manager.`;
    }
  }
  
  const manager = new Manager('Bob', 4, 50000);
  console.log(getGreeting(manager)); 