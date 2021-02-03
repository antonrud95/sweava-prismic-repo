import React from 'react';
import PropTypes from 'prop-types';
// import styles from './hero.module.scss'

const Hero = ({title, text}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}
Hero.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
export default Hero
