import React, { useState } from 'react'
import useTheme from '../Context/Theme';

export default function ThemeBtn() {
    

    // Here i am accessing theme context
    const {themeMode, lightMode, darkMode} = useTheme();
    const [message, setMessage] = useState();

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked

        if (darkModeStatus) {
            darkMode();
            setMessage('Dark Mode Activated');

        } else {
            lightMode();
            setMessage('Light Mode Activated');
        }
        setTimeout(() => {
            setMessage('');
        }, 1000);
    }
    return (
        <>
        <label className="relative inline-flex items-center cursor-pointer">
            
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode=== "dark"}
            />

            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full 
                peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                peer-checked:after:border-white after:content-[''] 
                after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 
                after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 
                peer-checked:bg-blue-600">
            </div>

            <span className="ml-3 text-xl font-bold text-gray-900 pr-3">Toggle Theme</span>
        </label>

        {message && (
            <div className=" flex items-center justify-center px-4 py-2 text-sm text-white font-medium bg-blue-500 rounded-lg transition-all h-full">
                {message}
            </div>
        )}
        </>
    );
}