import Image from 'next/image';
import React from 'react';
import pizza from '../../Assets/pizza.png'
import Right from '../icons/Right';

const Hero = () => {
    return (
        <section className='hero md:mt-4'>
            <div className='py-8 md:py-12'>
                <h1 className='text-4xl font-semibold'>
                    Everything is better, <br />
                    with a <span className='text-primary'>Pizza</span>
                </h1>
                <p className='my-4 text-grey-500'>Pizza is the missing piece that makes every day complete, a single yet delicious joy in life.
                </p>
                <div className='flex gap-4 text-sm'>
                    <button className='flex justify-center items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-semibold uppercase'>
                        Order Now
                        <Right />
                    </button>
                    <button className='flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold'>
                        Learn more
                        <Right />
                    </button>
                </div>
            </div>
            <div className='relative hidden md:block'>
                <Image src={pizza} layout={'fill'} objectFit={'contain'} alt='pizza' />
            </div>
        </section>
    );
};

export default Hero;