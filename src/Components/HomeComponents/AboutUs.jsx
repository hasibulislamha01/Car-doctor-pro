import React from 'react';
import ThemeButton from '../ThemeButton/ThemeButton';
import Image from 'next/image';
import personImage from '@/assets/images/about_us/person.jpg'
import parts from '@/assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className='w-full mt-12 lg:mt-28 flex flex-col-reverse md:flex-row items-center gap-10'>

            <div className='relative'>
                <Image src={personImage} alt='image of a person' className='rounded-xl w-[80%] md:w-full'/>
                <Image src={parts} className='absolute w-1/2 h-1/2 object-cover bottom-[-10%] right-[-2%] md:right-[-5%] rounded-lg'></Image>
            </div>

            <div className='flex flex-col gap-4'>
                <h4 className='text-[#FF3811]'>About Us</h4>
                <h1 className='text-3xl '>We are qualified & of experience in this field</h1>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>

                <ThemeButton name={'Get More Info'}></ThemeButton>
            </div>
        </div>
    );
};

export default AboutUs;