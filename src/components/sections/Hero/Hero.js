import React from 'react';
import PropTypes from 'prop-types';
import styles from './hero.module.scss'

const Hero = ({title, text, image}) => {
    return(
        <div className={styles.hero}>
            <h1>{title}</h1>
            <p>{text}</p>
            {/* <img src={image} alt="heroimage"/> */}
        </div>
    )
}
Hero.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
}
export default Hero
