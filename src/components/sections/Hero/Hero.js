import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'react-bootstrap';

import Button from '../../ui/Button/Button'

import styles from './hero.module.scss'

const Hero = ({slice}) => {
    return(
        <Container fluid className={styles.hero}>
            <div className={styles.heroWrapper}>
                <Row className={styles.heroRow}>
                    <Col xs="12" md="5" xl="12" className={styles.contentWrapper}>
                        <h1 className={styles.contentTitle}>{slice.primary.title.text}</h1>
                        <p className={styles.contentText}>{slice.primary.text.text}</p>
                        <Button
                            variant="secondary"
                            additionalClasses={styles.heroButton}
                        >
                            {slice.primary.button.text}
                        </Button>
                    </Col>
                    <Col xs="12" md="7" className={styles.imageWrapper}>
                        <img src={slice.primary.image.fluid.src} alt="heroimage" className={styles.image}/>
                    </Col>
                </Row>
            </div>
            <span className={styles.firstOrnament}/>
            <span className={styles.secondOrnament}/>
            <span className={styles.thirdOrnament}/>
            <span className={styles.fourthOrnament}/>
            <span className={styles.fifthOrnament}/>
        </Container>
    )
}
Hero.propTypes = {
    slice: PropTypes.object.isRequired,
}
export default Hero
