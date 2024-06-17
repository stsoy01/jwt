import '../styles/style.css';
import {verifyAccessToken, verifyUser} from './auth';


const email_btn = document.getElementsByClassName('email_btn')[0];
const password_btn = document.getElementsByClassName('password_btn')[0];
const email = document.getElementById('email');
const password = document.getElementById('password');
const back_btn = document.getElementById('back_btn');

const auth_email = document.getElementsByClassName('auth_email')[0];
const auth_password = document.getElementsByClassName('auth_password')[0];
const authData = {};

password.style.display = 'none';
auth_password.style.display = 'none';
password_btn.style.display = 'none';
back_btn.style.opacity = '0';
back_btn.style.paddingLeft = '14px';

back_btn.addEventListener('click', ()=> {
    back_btn.style.opacity = '0';
    password_btn.style.display = 'none';
    auth_password.style.display = 'none';
    password.style.display = 'none';
    email.style.display = 'block';
    email_btn.style.display = 'block';
    auth_email.style.display = 'block';
})


email_btn.addEventListener('click', (e) => {
    authData.email = email.value;

    if (!Object.values(authData)[0]) {
        alert('EMail field can`t be empty');
        return;
    }

    password.style.display = 'block';
    auth_password.style.display = 'block';
    password_btn.style.display = 'block';
    back_btn.style.opacity = '1';

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

    let data;

    verifyUser('http://localhost:2000/auth', authData)
        .then(res => res.text())
        .then(res => data = JSON.parse(res));


    setTimeout(() => {

        if (data.status === 'error') {
            alert(data.value)
            return;
        }

        verifyAccessToken('http://localhost:2000/tokenAuth', data.value)
            .then(res => res.text())
            .then(res => alert(JSON.parse(res).value))
    }, 1000)

})
