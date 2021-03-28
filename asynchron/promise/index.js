const myPromise = new Promise((resolve, reject) => {
  let add = 1 + 1;
  if (add === 2) {
    resolve("natürlich ist es zwei");
  } else {
    reject("💩");
  }
});

myPromise
  .then(message => {
    console.log("Hier ist das Ergebnis von resolve gespeichert: ");
    console.log(message);
  })
  .catch(err => {
    console.log("Hier wird das errorHandling gestartet: ");
    console.log(err);
  });
console.log("🤯🤯🤯");

//Without Promise
const btn = document.querySelector("button");

function trackUser() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimeout(() => {
        console.log(posData);
      }, 2000);
    },
    error => {
      console.log(error);
    }
  );
}

btn.addEventListener("click", trackUser);

//With Promise
function getPosition() {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
}

getPosition()
  .then(position => {
    const { latitude, longitude } = position.coords;
    return { latitude, longitude };
  })
  .then(cord => {
    console.log(cord);
  })
  .catch(err => {
    console.error(err.message);
  });

//With Async Await
async function coordinates() {
  let coordinates;
  try {
    const position = await getPosition();
    const { latitude, longitude } = position.coords;
    coordinates = { latitude, longitude, message: "from async" };
  } catch (err) {
    console.error(err.message);
  }
  //const text = await "hallo aus await";
  //console.log(text);
  console.log(coordinates);
}
coordinates();
