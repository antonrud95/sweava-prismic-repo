import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'react-bootstrap';

import Button from '../../ui/Button/Button'

import styles from './hero.module.scss'

const Hero = ({title, text, image, button}) => {
    return(
        <Container fluid className={styles.hero}>
            <div className={styles.heroWrapper}>
                <Row className={styles.heroRow}>
                    <Col xs="12" md="5" xl="12" className={styles.contentWrapper}>
                        <h1 className={styles.contentTitle}>{title}</h1>
                        <p className={styles.contentText}>{text}</p>
                        <Button
                            variant="secondary"
                            additionalClasses={styles.heroButton}
                        >
                            {button}
                        </Button>
                    </Col>
                    <Col xs="12" md="7" className={styles.imageWrapper}>
                        <img src={image} alt="heroimage" className={styles.image}/>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
Hero.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    button: PropTypes.string.isRequired,
}
export default Hero
