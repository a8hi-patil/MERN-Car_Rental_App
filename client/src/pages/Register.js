import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'
import './Register.css'
import { useState } from 'react'
function Register() {
    // const [isRegisterd, setIsRegisterd] = useState(false)
    const [uvr, setUvr] = useState(false)
    function registerHandler(e) {
        e.preventDefault()

        const registerData = {
            username: e.target.uname.value,
            type: e.target.utype.value,
            password: e.target.psw.value,
            cpassword: e.target.cpsw.value
        }
        console.log(registerData)

        let url = "http://localhost:5000/register"
        axios.post(url, registerData)
            .then(response => {
                alert('Registred  successfully')

                setTimeout(() => { window.location.href = '/login' }, 1)

            });

    }
    const usernameHandler = (e) => {

        console.log(e.target.value)
        let registerData = {
            username: e.target.value
        }
        let url = "http://localhost:5000/verify"
        axios.post(url, registerData)
            .then(response => {
                // console.log('skldhfsjkldhfsd')
                console.log('ll', response.data.col)
                if (response.data.col) {

                    setUvr(response.data.col)
                } else {

                    setUvr(response.data.col)
                }
            });
    }
    return (

        <div className='landingcar'>
            {
                window.location.href === '/register' ? (< div > <Navbar register="no" login="yes" /> </div>) : (< div > <Navbar register="yes" login="no" /> </div>)


            }
            <div className='formdiv'>

                <form action="" onSubmit={registerHandler}>
                    <h1>Register Here</h1>
                    <label htmlFor="uname">Name</label><br />
                    <input className={uvr ? 'uinput' : 'uinput1'} type="text" placeholder="Enter Username" name="uname" required onChange={usernameHandler} ></input><br />

                    <label htmlFor="cars">Log in type</label>
                    <select name="utype">
                        <option value="user">User</option>
                        <option value="car-owner">Car Owner</option>
                        <option value="admin">Admin</option>
                    </select>
                    <label htmlFor="psw">Password</label><br />
                    <input type="password" placeholder="Enter Password" name="psw" required></input><br />
                    <label htmlFor="psw">Confirm Password</label><br />
                    <input type="password" placeholder="Confirm Password" name="cpsw" required></input><br />


                    <button className='submit' type="submit">Register</button>
                    <div className='link' >   <Link to='/login' >Click Here to Log In</Link></div>

                </form>
            </div>
        </div>
    )
}

export default Register;