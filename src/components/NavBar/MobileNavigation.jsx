import NavLinks from "./NavLinks";
import { useState } from "react";

const MobileNavigation = () => {
    const [open,setOpen]=useState(false)
    const menuButton = <button aria-label="menu"><img src="../assets/images/icon-menu.svg" className="w-full" onClick={()=>setOpen(!open)} /></button>
    const closeButton = <button aria-label="menu"><img src="../assets/images/icon-menu-close.svg" className="w-full" onClick={()=>setOpen(!open)} /></button>

    return (
        <nav className="col-start-3 justify-self-end  xl:col-start-12 xl:hidden">
            
            {open ? closeButton : menuButton}    
            {open && < NavLinks />}
        </nav>
    );

}

export default MobileNavigation;