import React from 'react'
import './DarkModeToggle.css'

export const DarkModeToggle = () => {
  return (
    <div className="flex items-center justify-center pt-10">
        <label 
            htmlFor="toogleA"
            className="flex items-center cursor-pointer"
        >
            <div className="relative">
            <input onChange={() => {document.getElementById("myRoot").classList.toggle('dark');}} id="toogleA" type="checkbox" className="hidden" />
            <div
                className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
            ></div>
            <div
                className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
            ></div>
            </div>
            <div
            className="ml-3 text-gray-700 font-medium"
            >
            </div>
        </label>
    </div>
  );
}
