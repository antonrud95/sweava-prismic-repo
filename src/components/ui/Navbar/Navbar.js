import React, {useState, useRef} from 'react';
import {Link} from 'gatsby';
import {Container, Navbar, Nav} from 'react-bootstrap';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
  } from 'body-scroll-lock';

import classnames from 'classnames';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import styles from './navbar.module.scss';

const SNavbar = () => {
    const menuRef = useRef(null)
    const [click, setClick] = useState(false)
    const [isOnTop, setOnTop] = useState(true)
    const clickedBurger = () => {
        setClick(!click)
        if(click) {
            return enableBodyScroll(menuRef.current)
        } else {
            return disableBodyScroll(menuRef.current)
        }
        clearAllBodyScrollLocks()
    }
    useScrollPosition(
        ({ prevPos, currPos }) => {
          if (currPos.y >= -50) {
            setOnTop(true)
          } else {
            setOnTop(false)
          }
        },
        [isOnTop]
      )
    return(
        <Navbar fixed="top" className={!isOnTop ? classnames(styles.navbar, styles.navbar__light) : styles.navbar} ref={menuRef}>
            <Container>
                <Logo />
                <Nav className={styles.desktopMenu}>
                    <Link to="/" className={styles.navLink}>Home</Link>
                    <Link to="/" className={styles.navLink}>Team</Link>
                    <Link to="/" className={styles.navLink}>Faq</Link>
                    <Link to="/" className={styles.navLink}>Contact</Link>
                    <Button
                        variant="primary"
                        additionalClasses={styles.navButton}
                    >
                        Download app
                    </Button>
                </Nav>
                <Nav className={click ? classnames(styles.mobileMenu, styles.mobileMenu__active) : styles.mobileMenu}>
                    <div className={styles.linksWrapper}>
                        <Link to="/" className={styles.navLink}>Home</Link>
                        <Link to="/" className={styles.navLink}>Team</Link>
                        <Link to="/" className={styles.navLink}>Faq</Link>
                        <Link to="/" className={styles.navLink}>Contact</Link>
                    </div>
                    <div>
                        <Button
                            variant="primary"
                            additionalClasses={styles.navButton}
                        >
                            Download app
                        </Button>
                    </div>
                </Nav>
                <Nav className={styles.burgerMenu} onClick={clickedBurger}>
                    <span className={!click ? styles.burgerLine : classnames(styles.burgerLine, styles.burgerLine__first)}/>
                    <span className={click ? styles.centerLine : styles.burgerLine}/>
                    <span className={!click ? styles.burgerLine : classnames(styles.burgerLine, styles.burgerLine__second)}/>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default SNavbar