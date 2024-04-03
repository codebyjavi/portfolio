import { useEffect, useState } from 'react';

function Header() {
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
      setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <div className="sticky top-0 flex justify-end py-2 items-center md:py-5 bg-white/80 dark:bg-slate-900/80">
      <button 
        className="flex justify-center items-center p-3 bg-transparent text-4xl pointer"
        onClick={handleTheme}>
            {theme === "light" ? (
                <i className="bx bx-moon text-black"></i>
            ) : (
                <i className="bx bx-sun text-white"></i>
            )}
        </button>
    </div>
  );
}

export default Header