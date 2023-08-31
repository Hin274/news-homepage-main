import { slide as Menu } from 'react-burger-menu';
import NavLinks from './NavLinks';

const NavBar = () => {


    return (
        <Menu 
        right 
        customBurgerIcon={<img src='../../../assets/images/icon-menu.svg'/>}
        customCrossIcon={<img src='../../../assets/images/icon-menu-close.svg'/>}
        width={"69%"}
        >
        <NavLinks/>
            
        </Menu>
    );
}

export default NavBar;
<>

</>