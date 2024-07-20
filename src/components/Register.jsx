import React, { useState } from 'react'
import axios from 'axios'

// {
//     "firstname": "prashant",
//     "lastname": "singh",
//     "email": "prashant@gmail.com",
//     "password": "12345678"
// }


function Register() {

    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    const [user, setuser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        
        const {name, value} = e.target
        console.log(name, value)
        setuser({...user, [name]: value})
    }

    const register = async () => {
        try {
            const res = await axios.post("http://localhost:3030/signup", {...user})
            console.log(res.data)    
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        register()
    }


  return (
    <form action="submit">
        <label htmlFor="firstName">First Name</label>
        <input name='firstname' value={user.firstname} onChange={handleChange} type="text" />

        <label htmlFor="lastname">Last Name</label>
        <input name='lastname' value={user.lastname} onChange={handleChange} type="text" />

        <label htmlFor="email">Email</label>
        <input name='email' value={user.email} onChange={handleChange} type="email" />

        <label htmlFor="password">Password</label>
        <input name='password' value={user.password} onChange={handleChange} type="password" />

        <button type='submit' onClick={handleSubmit} > Submit </button>
    </form>
  )
}

export default Register