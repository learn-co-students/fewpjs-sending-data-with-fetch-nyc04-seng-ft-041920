// Add your code here
let body = document.querySelector("body");

function submitData(name, email){
    let data = {
        name: name,
        email: email
    }
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }
    return fetch("http://localhost:3000/users", configObj).then(res => res.json()).then(function(resp){
        body.append(resp.id)
    }).catch((error) => {
        body.append(error.message)
    })
}   


submitData("Bashir", "email@aol.com")
 






