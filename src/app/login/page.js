'use client';
import { signIn } from "next-auth/react";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import google from '../../Assets/google.png'

const LoginPage = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [loginInProgress, setloginInProgress] = useState(false)
    const [userCreated, setUserCreated] = useState(false)
    const [error, setError] = useState(false)
    const handleformSubmit = async (e) => {
        e.preventDefault();
        setloginInProgress(true)
        setError(false)
        setUserCreated(false)
        //signing in
        await signIn('credentials', { email, password, callbackUrl: "/" })
        setloginInProgress(false)
        setemail("")
        setpassword("")

        if (response.ok) {
            setUserCreated(true)
        }
        else {
            setError(true)
        }

    }
    return (
        <section className='mt-8'>
            <h1 className='text-center text-primary text-4xl underline'>Login</h1>
            {
                userCreated &&
                (<div className='my-4 text-center text-green-500 font-semibold'>
                    Your registration is Successful. <Link href='/login'><span className='text-blue-500 cursor-pointer underline'>Login here</span></Link>
                </div>)
            }
            {
                error &&
                (<div className='my-4 text-center text-red-500 font-semibold'>
                    An Error has occured!!! <br />
                    Please Try again.
                </div>)
            }
            <form className='block max-w-xs mx-auto' onSubmit={handleformSubmit}>
                <input type="email" name='email' placeholder='email' value={email} onChange={e => setemail(e.target.value)} disabled={loginInProgress} />
                <input type="password" name='password' placeholder='password' value={password} onChange={e => setpassword(e.target.value)} disabled={loginInProgress} />
                <button type='submit' disabled={loginInProgress}>
                    Login
                </button>
                <div className=' my-4 text-center text-gray-500'>
                    login with Social-Media
                </div>

            </form>
            <div className='block max-w-xs mx-auto'>
                <button
                    onClick={() => signIn('google', { callbackUrl: "/" })}
                    className='flex gap-4 justify-center'
                >
                    <Image src={google} alt='google' width={24} height={24} />
                    Login with Google
                </button>
            </div>
            <div className='text-center my-4'>
                Dont have an account yet? <Link href='/register'><span className='text-blue-500 cursor-pointer underline'>Register here</span></Link>
            </div>
        </section>
    );
};

export default LoginPage;