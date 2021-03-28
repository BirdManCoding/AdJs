//https://jsonplaceholder.typicode.com/

//fetch('https://jsonplaceholder.typicode.com/todos/255')
//  .then(response => {
//      console.log(response);
//      if(response.status === 404){
//          throw new Error("No Post was found")
//      }
//      return response.json()
//  })
//  .then(json => console.log(json))
//  .catch(err => {
//      console.log(err)
//  })

//async await
const getPosts = async id => {
  const url = id
    ? `https://jsonplaceholder.typicode.com/todos/${id}`
    : "https://jsonplaceholder.typicode.com/todos";
  try {
    const response = await fetch(url);

    if (response.status === 404) throw new Error("No Post was found");

    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.log(err);
  }
};
getPosts();
getPosts(3);

//post data
async function postData(data) {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData({
  completed: false,
  id: 5,
  title: "some cool title here",
  userId: 77,
}).then(data => {
  console.log(data); // JSON data parsed by `data.json()` call
});
