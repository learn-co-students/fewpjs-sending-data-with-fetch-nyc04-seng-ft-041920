// Add your code here
const dom = document.querySelector("body")

function submitData(name, email){

    let toStringify = {
        name,
        email
    }
    
    let jsonRequest = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(toStringify)
    }

    return fetch("http://localhost:3000/users", jsonRequest)
    .then(response => response.json()) // Retrieve incoming data and convert to JSON
    .then(obj => dom.innerHTML = obj.id) // Append ID to DOM
    .catch(error => dom.innerHTML = error.message); // Catch failed post using catch

}
