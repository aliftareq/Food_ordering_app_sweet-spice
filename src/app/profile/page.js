/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProfilePage = () => {
    const session = useSession()
    // console.log(session);
    const { status } = session
    const user = session?.data?.user

    //state declare
    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')

    useEffect(() => {
        if (status === 'authenticated') {
            setUserName(user?.name)
            fetch('/api/profile').then(response => {
                response.json().then(data => {
                    setPhone(data.phone)
                    setStreetAddress(data.streetAddress)
                    setPostalCode(data.postalCode)
                    setCity(data.city)
                    setCountry(data.country)
                })
            })
        }
    }, [user, status])

    //status check
    if (status === "loading") {
        return <div className="text-center text-3xl p-20">loading....</div>
    }
    if (status === 'unauthenticated') {
        redirect('/login')
    }

    //function
    const handleProfileInfoUpdate = async (e) => {
        e.preventDefault()
        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    name: userName,
                    streetAddress,
                    phone,
                    postalCode,
                    city,
                    country
                })
            });
            if (response.ok)
                resolve()
            else
                reject();
        });
        await toast.promise(savingPromise, {
            loading: 'Saving...',
            success: 'Profile saved!',
            error: 'something went wrong,try again.'
        })
    }

    const handlefileChange = async (e) => {
        const files = e?.target?.files;
        if (files?.length === 1) {
            const data = new FormData;
            data.set('file', files[0])
            await fetch('/api/upload', {
                method: 'POST',
                body: data,
            })
        }
    }

    return (
        <section className='my-8'>
            <h1 className='text-center text-primary text-4xl underline my-4'>PROFILE</h1>
            <div className="max-w-md mx-auto">
                <div className="flex gap-4">
                    <div className="p-2 rounded-lg relative max-w-[120px]">
                        <Image className="rounded-lg w-full mb-1" src={user?.image} width={250} height={250} alt={'avatar'} />
                        <label>
                            <input type="file" className="hidden" onChange={handlefileChange} />
                            <span className="block rounded-lg text-center px-6 py-1 cursor-pointer border border-gray-300">Edit</span>
                        </label>
                    </div>
                    <form className="grow" onSubmit={handleProfileInfoUpdate}>
                        <label>Your Name</label>
                        <input type="text" placeholder="First and last name" defaultValue={user?.name} onChange={(e) => setUserName(e.target.value)} />
                        <label>Email</label>
                        <input type="email" value={user?.email} disabled />
                        <label>Phone Number</label>
                        <input type="tel" placeholder="Phone Number"
                            defaultValue={phone} onChange={ev => setPhone(ev.target.value)}
                        />
                        <label>Street Address</label>
                        <input type="text" placeholder="Street address"
                            defaultValue={streetAddress} onChange={ev => setStreetAddress(ev.target.value)}
                        />
                        <div className="flex gap-2">
                            <div>
                                <label>Postal Code</label>
                                <input type="text" placeholder="Postal code"
                                    style={{ margin: '0' }}
                                    defaultValue={postalCode} onChange={ev => setPostalCode(ev.target.value)}
                                />
                            </div>
                            <div>
                                <label>Postal Code</label>
                                <input type="text" placeholder="City"
                                    style={{ margin: '0' }}
                                    defaultValue={city} onChange={ev => setCity(ev.target.value)}
                                />
                            </div>
                        </div>
                        <label>Country</label>
                        <input type="text" placeholder="Country"
                            defaultValue={country} onChange={ev => setCountry(ev.target.value)}
                        />
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;