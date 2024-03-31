import React, { useEffect, useState } from 'react';

function ThemeBtn() {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    });

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    function handleTheme() {
        setTheme(theme => (theme === "light" ? "dark" : "light"));
    }

    return (
        <button onClick={handleTheme} className="flex justify-center items-center p-3 bg-transparent text-4xl pointer">
            {theme === "light" ? (
                <i className="bx bx-moon text-black"></i>
            ) : (
                <i className="bx bx-sun text-white"></i>
            )}
        </button>
    )
}

export default ThemeBtn;
