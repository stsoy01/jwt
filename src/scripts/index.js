import '../styles/style.css';
import {verifyAccessToken, verifyUser} from './auth';


const email_btn = document.getElementsByClassName('email_btn')[0];
const password_btn = document.getElementsByClassName('password_btn')[0];
const email = document.getElementById('email');
const password = document.getElementById('password');

const auth_email = document.getElementsByClassName('auth_email')[0];
const auth_password = document.getElementsByClassName('auth_password')[0];
const authData = {};

password.style.display = 'none';
auth_password.style.display = 'none';
password_btn.style.display = 'none';


email_btn.addEventListener('click', (e) => {
    authData.email = email.value;

    if (!Object.values(authData)[0]) {
        alert('EMail field can`t be empty');
        return;
    }

    password.style.display = 'block';
    auth_password.style.display = 'block';
    password_btn.style.display = 'block';

    auth_email.style.display = 'none';
    email.style.display = 'none';
    email_btn.style.display = 'none';
})

password_btn.addEventListener('click', () => {
    authData.password = password.value;

    if (!Object.values(authData)[1]) {
        alert('Password field can`t be empty');
        return;
    }

    let accessToken
    verifyUser('http://localhost:2000/auth', authData)
        .then(res => res.text())
        .then(res => accessToken = JSON.parse(res).accessToken);


    setTimeout(() => {
        if (!accessToken) {
            alert('no such email or password');
            return;
        }

        verifyAccessToken('http://localhost:2000/tokenAuth', accessToken)
            .then(r => r.text())
    }, 1000)

})
