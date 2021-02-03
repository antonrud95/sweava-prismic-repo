import React from 'react';
import LogoImage from '../../../assets/images/slogo.svg';
import { Link } from 'gatsby';
import styles from './logo.module.scss'

const Logo = () => {
    return(
        <div className={styles.logoWrapper}>
            <Link to="/">
                <LogoImage className={styles.logo}/>
            </Link>
        </div>
    )
}
export default Logo