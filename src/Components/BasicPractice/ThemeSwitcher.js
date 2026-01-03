import { useState } from "react";

const ThemeSwitcher = () => {

    const [theme, setTheme] = useState("light");
    
    const switchTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
         
    }

    return (
        <>
            <div className={theme === "light" ? "bg-black text-white" : "bg-white text-black"}>
                <h1>Hii I'm Rutuja Learning React with interest </h1>
            <button
                onClick={() => switchTheme()}
                className="btn btn-secondary">
                Switch Theme
                </button>
                
            </div>
        
        </>
    );
}

export default ThemeSwitcher