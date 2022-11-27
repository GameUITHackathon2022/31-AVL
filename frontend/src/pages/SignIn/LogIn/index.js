import React, { useState } from 'react'
import SignInLayout from '../../../components/Layout/SignInLayout'
import GoogleLogin from 'react-google-login'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { AuthLogin } from '../../../services/AuthApi'
import { useCookies } from 'react-cookie'
import BgSignIn from "../../../assets/BgSignIn.png"
const checkIsValidField = (user) => {
    if(user.email == '') {
        return "Please fill in the blank fields."
    }if(user.passsword == '') {
        return "Please fill in the blank fields."
    }
    return true
}
const checkIsValidPassword = (password) => {
    if(password.length < 6 || password.length > 20) {
        return "'Password' must be between 6 and 20 characters"
    }
    return true
}
const LogIn = () => {
    // const token = data.data
    const [ cookies ,setCookie ] = useCookies('access_token')
    const [ error, setError ] = useState()


    // setCookie('access_token', token, { path: '/' })
    // console.log(cookies);
    const [ users, setUsers ] = useState({
        email: undefined,
        password: undefined,
    })
    
    const handleChange = (e) => {
        setUsers((prev) =>({...prev, [e.target.id] : e.target.value}))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(checkIsValidField(users) === true && checkIsValidPassword(users.password) === true ) {
            const data = await AuthLogin(users)
            setCookie('access_token', data, { path: '/editor'})
            window.location.href = '/editor'
        } else if(checkIsValidField(users) !== true ) {
            setError(checkIsValidField(users))
        } else {
            setError(checkIsValidPassword(users.password))
        }  
    };
    // if (cookies.access_token) {
	// 	window.location.href = '/editor'
	// }
    const responseGoogle = async (response) => {
        const { email, imageUrl, name } = response.profileObj
        const userGg = {
            name: name,
            email: email,
            imageUrl: imageUrl,
            password: "qdwapqjfowlcnsjqpwEqsdefsfs",
            isAdmin: false
        }
        
        // const userGg = { email,name,imageUrl }
        // console.log(response)
        const data = await AuthLogin(userGg)
        setCookie('access_token', data, { path: '/editor'})
        
        // negative("/editor", {replace : true})
        // setLoading(true)
        // setUser(userGg)
        window.location.href = '/editor'
        // setCookie('access_token', data, { path: '/editor'})
        // negative("/editor", {replace : true})
        // setLoading(false)
    }
    
  return (
    <SignInLayout>
        <div className=' flex justify-between rounded-3xl overflow-hidden border-4 border-blue-100'>
            <div className='left flex-1 bg-slate-50 xl:py-16 xl:px-20 lg:py-12 lg:px-16 md:px-4 md:py-8'>
                <h1 className='font-bold text-5xl'>Log in</h1>
                <p className='text-2xl text-slate-500'>Welcome back! Please enter your details</p>
                <form>
                    <div className='flex flex-col text-2xl my-3 font-medium'>
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder='you@domain.com' onChange={handleChange} className='border-2 border-slate-800 shadow-primaryBoxShadow py-2 px-3 rounded-lg my-2' required/>
                    </div>
                    <div className='flex flex-col text-2xl my-3 font-medium'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder='••••••••••' autoComplete='on' onChange={handleChange} className='border-2 border-slate-800 shadow-primaryBoxShadow py-2 px-3 rounded-lg my-2' required/>
                    </div>
                    <button type="submit" onClick={handleSubmit} className='bg-primary shadow-primaryBoxShadow w-full p-3 my-5 rounded-lg text-white'>Log in</button>
                </form>
                {error &&
                    <p className='-bottom-5 text-2xl text-center text-red-500'>{error}</p>
                }
                <div>
                    <GoogleLogin 
                        clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                        render={(renderProps) => (
                            <button type="button" 
                                className='shadow-primaryBoxShadow w-full flex justify-center items-center p-3 mt-6 rounded-lg text-black border-2 border-slate-800'
                                onClick={renderProps.onClick}   
                                disabled={renderProps.disabled} 
                            >
                                <FcGoogle  className='mr-4' /> Log in with Google
                            </button>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
                <div className='flex justify-center my-4'>
                    Doesn't have an account?
                    <Link to="/signup" className='ml-2 text-primary-text-color'> Sign up </Link> 
                </div>
            </div>
            <div className='right bg-primary-color lg:object-cover lg:block hidden'>
                <img src={BgSignIn} />
            </div>
        </div>
    </SignInLayout>
  )
}
export default LogIn