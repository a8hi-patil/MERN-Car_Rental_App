import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Login.css'
import axios from 'axios'
function Login() {
    localStorage.setItem('login', false)
    function loginHandler(e) {
        e.preventDefault()
        const loginData = {
            username: e.target.uname.value,
            password: e.target.psw.value
        }
        console.log(loginData)
        let url = "http://localhost:5000/login"
        axios.post(url, loginData)
            .then(response => {
                console.log(response.data)
                if (response.data) {
                    alert('Login  successfully')
                    localStorage.setItem('loginx', true)
                    localStorage.setItem('tocken', response.data.tocken)
                    console.log(response.data.type)
                    localStorage.setItem('username', response.data.username)
                    switch (response.data.type) {
                        case 'user': {
                            setTimeout(() => { window.location.href = '/userhome' }, 1)
                            break;
                        }
                        case 'car-owner': {
                            setTimeout(() => { window.location.href = '/owner' }, 1)
                            break;
                        }
                        case 'admin': {
                            setTimeout(() => { window.location.href = '/admin' }, 1)
                            break;
                        }
                        default: {
                            setTimeout(() => { window.location.href = '/' }, 1)
                        }
                    }

                    // setTimeout(() => { window.location.href = '/login' }, 1)

                } else {
                    alert('Login  F')
                }
            });


        // window.location.href='/'  
    }
    return (
        <div className='landingcar'>
            {
                window.location.href === '/login' ? (< div > <Navbar login="no" /> register="yes" </div>) : (< div > <Navbar login="yes" register="no" /> </div>)


            }


            <div className='formdiv'>
                <form action="" onSubmit={loginHandler}>
                    <h1>Log In</h1>
                    <label htmlFor="uname">Name</label><br />
                    <input type="text" placeholder="Enter Username" name="uname" required></input><br />
                    <label htmlFor="psw">Password</label><br />
                    <input type="password" placeholder="Enter Password" name="psw" required></input><br />
                    <button className='submit' type="submit">Login</button>
                    <div className='link' >   <Link to='/register' >Click Here to Register</Link></div>

                </form>
            </div>
        </div>
    )
}

export default Login