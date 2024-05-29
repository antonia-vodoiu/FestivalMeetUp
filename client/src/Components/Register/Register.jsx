import React, {useState} from 'react'
import './Register.css'
import '../../App.css'
import { Link, createMemoryRouter, useNavigate } from 'react-router-dom'
import Axios from 'axios'

//import assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'

//import icons
import { FaUser } from 'react-icons/fa'
import { FaShield } from "react-icons/fa6"
import { AiOutlineSwapRight } from 'react-icons/ai'
import { MdMarkEmailRead } from 'react-icons/md'

const Register = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigateTo = useNavigate()

    const createUser = (e)=>{
        e.preventDefault()
        Axios.post('http://localhost:3002/register', {
            Email: email,
            Username: username,
            Password: password
        }).then(()=>{
            console.log('User has been created')
            navigateTo('/')
            setEmail('')
            setUsername('') 
            setPassword('') 
        })
    }
    return (
        <div className='registerPage flex'>
            <div className="container flex">

            <div className="videoDiv" width="300" height="400">
                <video src={video} autoPlay loop muted></video>
                <div className="textDiv">
                <h2 className='title'>Start Your Festival Adventure</h2>
                <p>Connect and create memories!</p>
                </div>
            <div className="footerDiv flex">
                <span className="text">Already have an account?</span>
                <Link to={'/'}>
                <button className='btn'>Login</button>
                </Link>
            </div>
            </div>   
            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo Image" />
                    <h3> Let Us Know You!</h3>
                </div>

                <form action="" className="form grid"> 

                    <div className="inputDiv">
                        <label htmlFor="email">Email</label>
                        <div className="input flex">
                            <MdMarkEmailRead className='icon'/>
                            <input type="email" id='email' placeholder='Enter email' onChange={(event)=>{
                                setEmail(event.target.value)
                            }}></input>
                        </div>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                            <FaUser className='icon'/>
                            <input type="text" id='username' placeholder='Enter username' onChange={(event)=>{
                                setUsername(event.target.value)
                            }}></input>
                        </div>
                    </div>
            
                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                            <FaShield className='icon'/>
                            <input type="password" id='password' placeholder='Enter password' onChange={(event)=>{
                                setPassword(event.target.value)
                            }}></input>
                        </div>
                        </div>
                    <button type='submit' className='btn flex' onClick={createUser}> 
                        <span>Register</span>
                        <AiOutlineSwapRight className='icon'/>
                    </button>
                    <span className='forgotPassword'>
                        Forgot your password? <a href="">Click here</a>

                    </span>
                </form>
            </div>
            </div>     
        </div>
    )
}

export default Register