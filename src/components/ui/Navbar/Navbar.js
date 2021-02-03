import React from 'react';
import Logo from '../Logo/Logo';
import {Container, Navbar, Nav} from 'react-bootstrap';
import classnames from 'classnames'

import styles from './navbar.module.scss'

const SNavbar = () => {
    return(
        <Navbar fixed="top" className={styles.navbar}>
            <Container>
                <Logo />
                <Nav className={styles.burgerMenu}>
                    <span className={styles.burgerLine}/>
                    <span className={classnames(styles.burgerLine, styles.centerLine)}/>
                    <span className={styles.burgerLine}/>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default SNavbar