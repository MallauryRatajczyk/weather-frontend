// Insert your code here
document.getElementById("register").addEventListener('click', function () {
    let name = document.querySelector("#registerName").value;
    let email = document.querySelector("#registerEmail").value;
    let password = document.querySelector("#registerPassword").value;
    console.log(name, email, password);
    let newUs = { name, email, password }
    console.log(newUs)
    fetch("https://weather-backend-three.vercel.app/users/signup", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUs)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.result) {
                window.location.assign("index.html")
            }
        })
})

document.getElementById("connection").addEventListener('click', function () {
    let email = document.querySelector("#connectionEmail").value;
    let password = document.querySelector("#connectionPassword").value;
    console.log(email, password);
    let connectUs = { email, password }
    console.log(connectUs)
    fetch("https://weather-backend-three.vercel.app/users/signin", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(connectUs)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.result) {
                window.location.assign("index.html")
            }
        })
})

