import React, {useState} from 'react'
import MiroPic from './images/MiroPic.jpg'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


export default function App() {
  const [showDarkMode, setShowDarkMode] = useState(false);

  return (
    <div id="myRoot" className={showDarkMode ? "dark" : ""}>
      <div className="flex flex-col dark:bg-gray-900 h-screen" id="background">
        <FormGroup className="mt-5 mx-auto"> 
          <FormControlLabel
            control={<Switch checked={showDarkMode} onClick={() => setShowDarkMode(v => !v)} />}
          />
        </FormGroup>
        <div className="mt-5 mx-auto dark:bg-gray-800 bg-gray-100 rounded-xl shadow p-10" id="card">
          <img className="rounded-full w-32 mx-auto" alt="face of miro" src={MiroPic}/>
          <div className="text-center">
            <h1 className="text-4xl dark:text-green-400 text-green-600">Miro Behninger</h1>
            <h2 className="text-sm dark:text-gray-300 text-gray-500">Software Engineer</h2>
          </div>
        </div>
      </div>
    </div>
    
  );
}
