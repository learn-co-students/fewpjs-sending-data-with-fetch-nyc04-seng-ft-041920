// Add your code here


function submitData(name, email) {
    let configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        })
    }
    return fetch("http://localhost:3000/users", configurationObject)
        .then(response => response.json())
        .then(json => document.body.innerHTML = json.id)
        .catch(err => document.body.innerHTML = err.message)

}



//             // for (let val in object) {
//             // if (val === 'id') {
//             // document.body.innerText = object['id']
//             console.log(object)
//             document.body.innerHTML = object['id']
//             // let li = document.createElement("li")
//             // li.innerText = object[val]
//             // document.body.appendChild(li)
//             // }
//             // }
//         })
//         .catch(function (error) {
//             if (error) {
//                 // let h1 = document.createElement('h1')
//                 // h1.id = 'error'
//                 // document.body.appendChild(h1)
//                 document.body.innerHTML = error.message
//             }
//         });
// }

submitData('cristian', 'cc@gmail.com')