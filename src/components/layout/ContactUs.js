import React from 'react';
import SectionHeader from './SectionHeader';

const ContactUs = () => {
    return (
        <section className="text-center my-8">
            <SectionHeader
                subHeader={"Don't hesitate"}
                mainHeader={'Contact Us'}
            />
            <div className="mt-8">
                <a className="text-4xl underline text-gray-800" href="tel:+880 1751-171917">+880 1751-171917</a>
            </div>
        </section>
    );
};

export default ContactUs;