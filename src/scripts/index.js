import '../styles/style.css';
import { verifyUser } from './auth';



const button = document.getElementById('btn')
const email = document.getElementById('email')
const password = document.getElementById('password')
const authData = {}

button.addEventListener('click', (e) => {
  authData.email = email.value;
  authData.password = password.value;

  if (Object.values(authData).includes('')) {
    alert('fill all inputs')
    return;
  }

  verifyUser('http://localhost:2000/auth', authData)
    .then(res => res.text())
    .then(res => console.log(res))
})
