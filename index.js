// Add your code here
function submitData(userName, userEmail){
   const postRequest = fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name: userName,
        email: userEmail
    })
    })
    .then(response => response.json())
    .then(userData => {
        console.log(userData)
        const divTag = document.createElement("div")
        divTag.innerHTML = `
            <p>${userData.id} ${userData["name"]}: ${userData["email"]} </p>
        `
        document.body.appendChild(divTag)
    })
    .catch(function (error) {
        console.log(error.message);
        document.body.append(error.message);
    })
    return postRequest;
}

submitData("Leo", "leo@yahoo.com")