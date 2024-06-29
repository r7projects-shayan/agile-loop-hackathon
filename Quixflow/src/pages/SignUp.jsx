import React, { useState } from 'react'
import axios from 'axios';
import NavbarTwo from '../components/NavbarTwo';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { FaApple, FaGoogle, FaMicrosoft } from 'react-icons/fa';

function SignUp() {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/register/', {
                name,
                email,
                password,
                password2,
            });

            if (response.status === 201) {
                navigate('/login')
            } else {
                setMessage(`Sign Up failed .${response.message}`)
            }
        } catch (error) {
            setMessage(`Sign Up failed .Check details and try again`)
            console.error('Signup failed', error);
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
                        Create an account
                    </div>
                </div>
                <form onSubmit={handleSignup} className='md:w-[38%] w-[80%]'>

                    <h2 className='font-semibold txt-2xl mb-4'>Sign Up</h2>
                    {message ?
                        <div>
                            <p className='mb-2'>{message}</p>
                        </div>
                        : <div></div>}
                    <div className='flex flex-row gap-4
                     md:justify-between mb-4'>
                        <div>

                            <input
                                placeholder='User Name'
                                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>

                            <input
                                placeholder='Email'
                                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div class="mb-4">

                        <input
                            placeholder='Password'
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='mb-4'>

                        <input
                            placeholder='Confirm Password'
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            type="password"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                    </div>
                    <button type="submit"
                        className='bg-blue-500 w-28 mb-3 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300'
                    >
                        Signup
                    </button>

                    <div className='flex flex-row gap-4  justify-center'>
                        <p>Already have an account ?</p>
                        <a href='/login' className='text-blue-500'>
                            Log in
                        </a>
                    </div>
                </form>


            </div>

            <hr className='w-[92vw] mx-auto py-2 px-4'></hr>
            <p className='text-2xl font-bold'>OR</p>

            <div className='max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 mb-6 flex flex-row gap-10
            justify-center'>
                <a href=''>
                    <FaGoogle className='h-12 w-12' />
                </a>
                <a href=''>
                    <FaApple className='h-12 w-12' />
                </a>
                <a href=''>
                    <FaMicrosoft className='h-12 w-12' />
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp



