import React from 'react'
import ThemeBtn from './Theme/Theme';


function Header() {
  return (
    <div className="sticky top-0 flex justify-end py-2 items-center md:py-5 bg-white/80 dark:bg-slate-900/80">
      <ThemeBtn/>
    </div>
  );
}

export default Header