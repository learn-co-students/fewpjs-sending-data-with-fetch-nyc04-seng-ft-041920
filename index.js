function submitData(name, email){
  return fetch("http://localhost:3000/users", {
    method: "POST",
     headers: { 
      "content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(function(response){
    return response.json();
  })
  .then(function(object){
    console.log(object)
    console.log(object.id)
    document.querySelector("body").append(object.id)
  })
  .catch(function(error){
    console.log(error)
    document.querySelector("body").append(error.message)

    console.log(error.message)
  })
}