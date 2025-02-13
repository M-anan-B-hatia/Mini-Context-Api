import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
                <img className="p-8 rounded-t-lg" src="/Images/1.jpg" alt="product_image1" />
           
            <div className="px-5 pb-5">
                
                    <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Hi I am Manan, and I am working as a Java Developer. Looking for the opportunities in Front End, 
                        Back End and Full Stack Roles.<br></br>
                        <span className="text-[#9B59B6] text-2xl font-extrabold mb-4 tracking-wide uppercase dark:text-pink-400 dark:font-extrabold"> Let’s Connect </span> 
                    </h5>
                
                <div className="flex flex-col items-start space-y-2 mt-2.5 mb-5">
                    <a
                    href='https://leetcode.com/u/MananBhatia15/'
                    target='_bank'
                    rel='noopener noreferrer'
                    className='text-2xl text-orange-400 hover:text-orange-600 font-medium underline transition-transform transform hover:scale-125  duration-300 dark:text-[#fcdc56]'>
                        Leet Code
                        
                    </a>

                    <a
                    href='https://www.linkedin.com/in/bhatiamanan/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-2xl text-blue-600 hover:text-blue-800 font-medium underline transition-transform transform hover:scale-125  duration-300 dark:text-[#4f9fd1] dark:text-2xl'>
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}