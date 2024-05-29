import React, {useEffect, useState} from 'react'
import './Login.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

//import assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'

//import icons
import { FaUser } from 'react-icons/fa'
import { FaShield } from "react-icons/fa6"
import { AiOutlineSwapRight } from 'react-icons/ai'

const Login = () => {

    const [loginUsername, setLoginUsername] = useState('')    
    const [loginPassword, setLoginPassword] = useState('')    
    const navigateTo = useNavigate()
    const [loginStatus, setLoginStatus] = useState('')
    const [statusHolder, setStatusHolder] = useState('message')

    const loginUser = (e)=>{

        e.preventDefault();
        Axios.post('http://localhost:3002/login', {
            LoginUsername: loginUsername,
            LoginPassword: loginPassword
        }).then((response)=>{
            console.log(response)
            if (response.data.message || loginUsername =='' || loginPassword ==''){
                navigateTo('/')
                setLoginStatus('Incorrect username or password!')
            }
            else{
                navigateTo('/dashboard')
            }

            })
        
    }

    useEffect(()=>{
        if(loginStatus !== ''){
            setStatusHolder('showMessage')
            setTimeout(()=>{
                setStatusHolder('message')
            }, 6000);
        }
    }, [loginStatus])

    const onSubmit = ()=>{
        setLoginUsername('')
        setLoginPassword('')
    } 

    return (
        <div className='loginPage flex'>
            <div className="container flex">

            <div className="videoDiv" width="300" height="400">
                <video src={video} autoPlay loop muted></video>
                <div className="textDiv">
                <h2 className='title'>Start Your Festival Adventure</h2>
                <p>Connect and create memories!</p>
                </div>
            <div className="footerDiv flex">
                <span className="text">Don't have an account?</span>
                <Link to={'/register'}>
                <button className='btn'>Sign Up</button>
                </Link>
            </div>
            </div>   
            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo Image" />
                    <h3> Welcome Back!</h3>
                </div>
                <form action="" className="form grid" onSubmit={onSubmit}>  
                    <span className={statusHolder}>{loginStatus}</span> 
                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                            <FaUser className='icon'/>
                            <input type="text" id='username' placeholder='Enter username' 
                            onChange={(event)=>{setLoginUsername(event.target.value)}}></input>
                        </div>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                            <FaShield className='icon'/>
                            <input type="password" id='password' placeholder='Enter password'
                            onChange={(event)=>{setLoginPassword(event.target.value)}}></input>
                        </div>
                        </div>
                    <button type='submit' className='btn flex' onClick= {loginUser}> 
                        <span>Login</span>
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

export default Login