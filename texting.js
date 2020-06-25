// Add your code here
function submitData(userName, userEmail) {

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(
      {
        name: userName,
        email: userEmail
      }
    )
  })
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    const ul = document.querySelector("ul")
    const li = document.createElement("li")
    
    for (const data in json) {
      const p = document.createElement("p")
      p.innerHTML = `${json[data]}`
      li.append(p)
      ul.append(li)
    }

  })
  .catch(function(error) {
    alert("Something went wrong!")
    console.log(error.message)
  })
}

// function appendDom(data) {
//   const ul = document.querySelector("ul")
//   const li = document.createElement("li")
//   li.innerHTML = `
//     <p>${data.name}</p>
//     <p>${data.email}</p>
//     <p>${data.id}</p>
//   `
//   ul.append(li)
// }