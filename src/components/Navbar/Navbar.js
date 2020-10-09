import React, { useState, useEffect } from 'react'
import { 
    Nav, 
    NavLogo, 
    NavbarContainer, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink,
    FirstName,
    SecondName,
    SecondNamePart,
} from "./Navbar.elements";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles';
import Logo from '../../images/Logo';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <>
        <IconContext.Provider value={{ color: '#00ff' }}>
          <Nav>
              <NavbarContainer>
                  <NavLogo to="/">
                      <Logo width={100} height={100} color="#0000ff" fill="ff000"/>
                      <FirstName>KANMAA</FirstName>
                      <SecondName>ADV</SecondName>
                      <SecondNamePart>ENTURES</SecondNamePart>
                  </NavLogo>
                  <MobileIcon onClick={ handleClick }>
                      {click ? <FaTimes /> : <FaBars />}
                  </MobileIcon>
                  <NavMenu onClick={ handleClick } click={click}>
                      <NavItem>
                          <NavLinks exact to='/'>
                              Home
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='/places'>
                              Places To Stay
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='/experiences'>
                              Experiences
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='/host'>
                              Become A Host
                          </NavLinks>
                      </NavItem>
                      <NavItemBtn>
                          {button ? (
                              <NavBtnLink to='./sign-up'>
                                  <Button primary>SIGN UP</Button>
                              </NavBtnLink>
                          ) : (
                              <NavBtnLink to='./sign-up'>
                                  <Button fontBig primary>
                                      SIGN UP
                                  </Button>
                              </NavBtnLink>
                          )}
                      </NavItemBtn>
                  </NavMenu>
              </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
