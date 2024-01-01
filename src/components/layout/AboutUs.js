import React from 'react';
import SectionHeader from './SectionHeader';

const AboutUs = () => {
    return (
        <section className="text-center my-8">
            <SectionHeader
                subHeader={'Our Stroy'}
                mainHeader={'About us'}
            />
            <div className="max-w-xl text-gray-500  mx-auto mt-4 flex flex-col gap-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquam quia repellat, qui eos sunt. Dolorum pariatur voluptate sapiente molestias?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus vero nobis dicta modi aut neque quaerat laboriosam consequuntur tempora optio.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, ullam?</p>
            </div>

        </section>
    );
};

export default AboutUs;