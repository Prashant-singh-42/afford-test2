import React, { useState } from 'react'
import axios from 'axios'

// {
//     "firstname": "prashant",
//     "lastname": "singh",
//     "email": "prashant@gmail.com",
//     "password": "12345678"
// }


function Login() {

    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    const [user, setuser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(name, value)
        setuser({...user, [name]: value})
    }

    const validation = (user) => {
        const {password , email} = user
        let ret = true
        if (!password) {
            console.log("password is required")
            ret = false
        }else{
            if (password.length < 8) {
                console.log("too short password")
                ret = false
            }
        }

        if (!email) {
            console.log("email is required")
            ret = false
        }

        return ret
    }

    const login = async () => {
        try {
            if (validation(user)) {
                const res = await axios.post(`http://localhost:3030/users/${user.email}/login`, {password: user.password})
                console.log(res.data)    
            }else {
                console.log("there was a error")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        console.log("clicked in login")
        e.preventDefault()
        login()
    }


  return (
    <form action="submit">

        <label htmlFor="email">Email</label>
        <input name='email' value={user.email} onChange={handleChange} type="email" />

        <label htmlFor="password">Password</label>
        <input name='password' value={user.password} onChange={handleChange} type="password" />

        <button type='submit' onClick={handleSubmit} > Submit </button>
    </form>
  )
}

export default Login