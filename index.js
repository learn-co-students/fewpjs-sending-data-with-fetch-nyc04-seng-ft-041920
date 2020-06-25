// Add your code here

// import { bodyParser } from "json-server";

let body = document.querySelector("body");

function submitData(userName, userEmail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      // retrieves the new ID value and appends it to the DOM
      body.append(object.id);
    })
    .catch(function (error) {
      alert("NOOOOOOOO");
      body.append(error.message);
    });
}
