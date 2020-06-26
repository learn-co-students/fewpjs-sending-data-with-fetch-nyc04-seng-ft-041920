// Add your code here

  
function submitData(name, email ){
  let configObj = {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  };

  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
    document.body.innerHTML = object["id"]
  })
  .catch(function(error) {
    alert("Bad things!");
    console.log(error.message);
    document.body.innerHTML = error.message
  });
}

//submitData('hyojin', 'hyojin@hyojin.com')