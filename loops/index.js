//__________________________________________________________________________________________________________________________________________________________
//for in
const user = {
  firstName: "stan",
  lastName: "holzer",
  email: "holz@web.de",
};

for (let key in user) {
  console.log(`Das Feld ${key} hat den Wert ${user[key]}`);
}

//__________________________________________________________________________________________________________________________________________________________
//for of
const arr = ["javascript", "nodeJs", "react", "graphQl"];

for (let elem of arr) {
  console.log(elem);
}

//__________________________________________________________________________________________________________________________________________________________
//map
const listItem = arr.map(el => {
  const li = document.createElement("li");
  li.innerHTML = `<a href='#'>${el}</a>`;
  return li;
});
console.log(listItem);
const ul = document.querySelector("ul");
ul.append(listItem[0]);

//==================================================================================================
const prices = [10.99, 5.99, 108.19, 7.85];
const tax = 0.19;

const taxAdjPrices = prices.map((price, idx, prices) => {
  const priceObj = {
    index: idx,
    oldPrice: price,
    taxAdjPrice: price * (1 + tax),
  };
  return priceObj;
});
console.log(taxAdjPrices);

//__________________________________________________________________________________________________________________________________________________________
//find
const users = [
  { name: "Pete", age: "33" },
  { name: "Jenny", age: "27" },
  { name: "Pete", age: "55" },
];

const pete = users.find((person, index, users) => {
  return person.name === "Pete" && index === 2;
});

console.log(pete);

//__________________________________________________________________________________________________________________________________________________________
//filter
const filterPete = users.filter((person, index, users) => {
  return person.name === "Pete";
});

console.log(filterPete);

//__________________________________________________________________________________________________________________________________________________________
//reduce
const numArr = [1, 2, 3, 4, 5];

const numbers = numArr.reduce((accumulator, element) => {
  return accumulator * element;
}, 1);
console.log(numbers);
