import React from 'react'
import MiroPic from './images/MiroPic.jpg'
import { DarkModeToggle } from "./Toggle/DarkModeToggle";

export default function App() {
  return (
    <div id="myRoot">
      <div className="flex flex-col dark:bg-gray-900 h-screen" id="background">
        <DarkModeToggle />
        <div className="mt-10 mx-auto dark:bg-gray-800 bg-gray-100 rounded-xl shadow p-10" id="card">
          <img className="rounded-full w-32 mx-auto" src={MiroPic}/>
          <div className="text-center">
            <h1 className="text-4xl dark:text-green-400 text-green-600">Miro Behninger</h1>
            <h2 className="text-sm dark:text-gray-300 text-gray-500">Software Engineer</h2>
          </div>
        </div>
      </div>
    </div>
    
  );
}
