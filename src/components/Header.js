import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import icon1 from '../img/icon1.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark sticky='top'>
        <NavbarBrand className='ms-5' href='/'>
            <img src={icon1} alt='kamomaloca logo' className='float-start' />
            <h1 className='mt-1'>KaMoMaLoCa</h1>
        </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

            <Collapse isOpen={menuOpen} navbar>
                 

                <Nav className='ms-auto' navbar>                    
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                <i className='fa fa-cutlery fa-lg' /> Food
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                <i className='fa fa-book fa-lg' /> Order                
                            </NavLink>
                        </NavItem>
                </Nav>
            </Collapse>
      </Navbar>
    );
}

export default Header;