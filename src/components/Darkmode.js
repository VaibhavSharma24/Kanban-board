import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


function Darkmode() {

    const [theme, setTheme] = useState("light-theme");

    const toggleTheme = () => {
        if(theme === "dark-theme"){
            setTheme('light-theme')
        }else{
            setTheme('dark-theme')
        }
      };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);


  return (
    <div>
    <button className="dark-mode" onClick={toggleTheme}>
    Theme
    </button>
    </div>
  )
}

export default Darkmode