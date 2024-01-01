import Image from 'next/image';
import React from 'react';
import salad1 from "../../Assets/sallad1.png"
import salad2 from "../../Assets/sallad2.png"
import MenuItem from '../Menu/MenuItem';
import SectionHeader from './SectionHeader';

const HomeMenu = () => {
    return (
        <section className=''>
            <div className='absolute w-full left-0 right-0  justify-start'>
                <div className='absolute -top-[30px] left-0 -z-10'>
                    <Image src={salad1} alt='salad1' width={109} height={189} />
                </div>
                <div className='absolute -top-[110px] right-0 -z-10'>
                    <Image src={salad2} alt='salad2' width={107} height={195} />
                </div>
            </div>
            <div className='text-center mt-4'>
                <SectionHeader mainHeader={'Menu'} subHeader={'Check out'} />
            </div>
            <div className='grid grid-cols-3 gap-4 my-16'>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    );
};

export default HomeMenu;