//objects
const user = {
  name: "Jenny",
  age: "12",
  hobbies: ["Sport", "Programmieren", "essen"],
};
console.log(user.name);
console.log(user["name"]);

//__________________________________________________________________________________________________________________________________________________________
//object destructuring
const { age } = user;
console.log(age);
//__________________________________________________________________________________________________________________________________________________________
//object advanced
const userTwo = {
  firstName: "Pete",
  lastName: "Mayer",
  age: 25,
  isAdmin: true,
  greet() {
    return `Hallo ich bin ${this.firstName} ${this.lastName}`;
  },
};
console.log(userTwo.greet());

const { greet } = userTwo;
console.log(greet());

const bindGreet = greet.bind(userTwo);
console.log(bindGreet());

//__________________________________________________________________________________________________________________________________________________________
//classes

class User {
  constructor(__firstName, __lastName, __age) {
    this.firstName = __firstName;
    this.lastName = __lastName;
    this.age = __age;
  }
  greet(text) {
    console.log(`${text} : ${this.firstName}`);
  }
}

const userPete = new User("Peter", "Mayer", 22);
const userJenny = new User("Jenny", "Petterson", 34);

console.log(userPete, userJenny);
userPete.greet("Hallo");
//__________________________________________________________________________________________________________________________________________________________
//Instanzen
const arr1 = [1, 2, 3, 4]; // new Array(1,2,3,4);
const arr2 = [1, 2, 3, 4]; // new Array(1,2,3,4);
if (arr1 === arr2) {
  console.log("Das wird nicht passieren");
} else {
  console.log(
    "Erweiterte Datentypen haben eine eigene Instanz auch wenn die Werte gleich sind, ist es die Instanz nicht!!!"
  );
}

//__________________________________________________________________________________________________________________________________________________________
//static
class Call {
  constructor(__phrase) {
    this.phrase = __phrase;
  }

  callPhrase() {
    console.log(`Hey ich logge ${this.phrase}`);
  }

  static callStatic() {
    console.log("Ich gehöre keiner Instanz und brauche kein new!!!");
  }
}

const call = new Call("Die Phrase");
call.callPhrase();

Call.callStatic();

//__________________________________________________________________________________________________________________________________________________________
//getters setters
class Customer {
  set customerInfo(value) {
    this.firstName = value.firstName;
    this.lastName = value.lastName;
    this.type = value.type;
  }
  get customerInfo() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      type: this.type,
    };
  }
}

const customer = new Customer();
customer.customerInfo = {
  firstName: "Pete",
  lastName: "Mayer",
  type: "full stack programmer",
};

console.log(customer.customerInfo);

//__________________________________________________________________________________________________________________________________________________________
//Klassen erweitern
class Post {
  constructor(__title, __text, __creatorId) {
    this.title = __title;
    this.text = __text;
    this.creatorId = __creatorId;
  }
  printTitle() {
    console.log(this.title);
  }
}

class ImagePost extends Post {
  constructor(__title, __text, __creatorId, __imgId) {
    super(__title, __text, __creatorId);
    this.imageId = __imgId;
  }
  printImage() {
    console.log(this.imageId);
  }
}

const firstImagePost = new ImagePost(
  "New Title",
  "Some good text",
  "myAwesomeId",
  "https://irgendwas"
);

firstImagePost.printTitle();
firstImagePost.printImage();
