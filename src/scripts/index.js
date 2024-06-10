import '../styles/style.css';


const button = document.getElementById('btn')
const email = document.getElementById('email')
const password = document.getElementById('password')

const authData = {}

button.addEventListener('click', (e) => {
    authData.email = email.value;
    authData.password = password.value;
    fetch('http://localhost:2000/auth', {
        method: 'POST',
        body: JSON.stringify(authData),
        headers: {
            "content-type": "application/json",
            'Access-Control-Allow-Origin': [ 'http://localhost:1000'],

        }
    })
        .then(res => res.text())
        .then(res => console.log(res))


})
