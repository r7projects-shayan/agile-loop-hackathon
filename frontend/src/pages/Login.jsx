import React, { useState } from 'react'
import axios from 'axios';
//import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import NavbarTwo from '../components/NavbarTwo';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { FaApple, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { FaApplePay } from 'react-icons/fa6';
const cookies = new Cookies();

function Login() {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const history = useHistory();
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        //for rapid testing
        if (email === "devobi@gmail.com" && password === "Dev1@p@SS") {
            navigate('/dashboard');
        } else {

            try {
                const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
                    email,
                    password,
                });
                if (response.status === 200) {
                    cookies.set('access_token', response.data.access, { path: '/' });
                    cookies.set('refresh_token', response.data.refresh, { path: '/' });
                    navigate('/dashboard');
                } else {

                    setMessage(`Login failed .Check details and try again`)
                }
            } catch (error) {
                setMessage(`Login failed .Check details and try again`)
                console.error('Login failed', error);
            }

        }

    };

    return (
        <div className='text-gray-300  '>
            <NavbarTwo />
            <div className='max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col gap-4 h-80 
            items-center justify-center md:justify-between mb-4'>
                <div className="">
                    <div className="w-[30vw]">
                        <img className="md:block hidden " alt="Mask group" src="images/mask-group.png" />
                    </div>
                    <div className=" [font-family:'Haskoy-ExtraBold',Helvetica] font-extrabold text-white
                     md:text-[42px] text-[28px] ">
                        Welcome Back!
                    </div>
                </div>
                <form onSubmit={handleLogin} className='md:w-[38%] w-[80%]'>
                    <h2 className='mb-4 font-semibold text-2xl'>Login</h2>
                    {message ?
                        <div>
                            <p className='mb-2'>{message}</p>
                        </div>
                        : <div></div>}
                    <div className='mb-4'>

                        <input
                            placeholder='Email'
                            className="w-full px-3 py-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-4'>

                        <input
                            placeholder='Password'
                            className="w-full px-3 py-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit"
                        className='bg-blue-500 w-28 mb-3 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300'
                    >
                        Login
                    </button>
                    <div className='flex flex-row gap-4  justify-center'>
                        <p>Don't have an account ?</p>
                        <a href='/signup' className='text-blue-500'>
                            Sign Up
                        </a>
                    </div>
                </form>


            </div>

            <hr className='w-[92vw] mx-auto py-2 px-4'></hr>
            <p className='text-2xl font-bold'>OR</p>

            <div className='max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 mb-6 flex flex-row gap-10
            justify-center'>
                <a href=''>
                    <FaGoogle className='h-12 w-12'/>
                </a>
                <a href=''>
                    <FaApple className='h-12 w-12'/>
                </a>
                <a href=''>
                    <FaMicrosoft className='h-12 w-12'/>
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default Login