import React, {useState} from 'react';
import Logo from '../Logo/Logo';
import {Container, Navbar, Nav} from 'react-bootstrap';
// import classnames from 'classnames'

import styles from './navbar.module.scss'

const SNavbar = () => {
    const [click, setClick] = useState(false)
    const clickedBurger = () => {
        setClick(!click)
    }
    return(
        <Navbar fixed="top" className={styles.navbar}>
            <Container>
                <Logo />
                <Nav className={styles.burgerMenu} onClick={clickedBurger}>
                    <span className={styles.burgerLine}/>
                    <span className={click ? styles.centerLine : styles.burgerLine}/>
                    <span className={styles.burgerLine}/>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default SNavbar