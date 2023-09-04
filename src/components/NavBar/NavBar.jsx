import { slide as Menu } from 'react-burger-menu';
import NavLinks from './NavLinks';
import useViewport from '../../../hooks/useViewport';


const NavBar = () => {

    const screenWidth = useViewport()
    const breakpoint = 1024

    return (
        <>
            { screenWidth > breakpoint ? <NavLinks /> :
                <Menu
                    right
                    customBurgerIcon={<img src='../../../assets/images/icon-menu.svg' />}
                    customCrossIcon={<img src='../../../assets/images/icon-menu-close.svg' />}
                    width={"69%"}
                >
                    <NavLinks />

                </Menu>
            }
        </>
    );
}

export default NavBar;
<>

</>