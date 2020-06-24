function submitData(userName, userEmail) {
    let userData = {
        name: userName,
        email: userEmail
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        document.body.innerHTML = object["id"]
    })
    .catch(function(error) {
        // console.log(error.message);
        document.body.innerHTML = error.message;
    });
}

// submitData("catgirl", "catgirl@cats");