"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    const session = useSession()
    const status = session?.status
    let userName = session?.data?.user?.name || session?.data?.user?.email
    if (userName && userName.includes(' ')) {
        userName = userName?.split(' ')[0]
    }
    return (
        <header className="flex items-center justify-between">
            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                <Link className="text-primary font-semibold text-2xl" href="/">Sugar^&^Spice</Link>
                <Link href={'/'}>Home</Link>
                <Link href={''}>menu</Link>
                <Link href={''}>about</Link>
                <Link href={''}>contact</Link>
            </nav>
            <nav className='flex items-center gap-6 text-gray-500 font-semibold'>
                {(status === 'authenticated') ?
                    <>
                        <Link href={"/profile"} title={userName} className='whitespace-nowrap'>
                            Hello, {userName}
                        </Link>
                        <button onClick={() => signOut()} className="bg-primary text-white rounded-full px-8 py-2">
                            Logout
                        </button>
                    </>
                    :
                    <>
                        <Link href={'/login'} >Login</Link>
                        <Link href={'/register'} className="bg-primary text-white rounded-full px-8 py-2">Register</Link>
                    </>
                }
            </nav>
        </header>
    );
};

export default Header;