// Add your code here
let body = document.body

function submitData(name, email){
    let data = {
        name: name,
        email: email
    }
    let postRequest = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };
    return fetch("http://localhost:3000/users", postRequest)
        .then(response => response.json())
        .then(info => body.append(info.id))
        .catch(error => body.append(error.message))
}


submitData("darren", "fakedarren@gmail.com")