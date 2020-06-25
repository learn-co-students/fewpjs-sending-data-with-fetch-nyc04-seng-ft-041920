const ul = document.querySelector("ul")

// Add your code here
function submitData(userName, userEmail) {

  let data = {
    name: userName,
    email: userEmail
  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }

  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    return appendDom(json)
  })
  .catch(function(error) {
    ul.append(error.message)
  })
}

function appendDom(data) {
  const li = document.createElement("li")
  li.innerHTML = `
    <p>${data.id}</p>
    <p>${data.name}</p>
    <p>${data.email}</p>
  `
  ul.append(li)
}