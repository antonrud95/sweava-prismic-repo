import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'react-bootstrap'

import styles from './follow.module.scss';

const Follow = ({title, image}) => {
    return(
        <Container className={styles.followWrapper}>
            <Row>
                <Col xs="12" md="7">
                    <h2 className={styles.followTitle}>{title}</h2>
                </Col>
                <Col xs="12" md="5" className={styles.imageWrapper}>
                    <img src={image} alt="follow" className={styles.image}/>
                </Col>
            </Row>
            <span className={styles.copyright}>Copywright 2021 <span className={styles.normal}>website.com</span></span>
        </Container>
    )
}
Follow.propTypes = { 
    title: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
}
export default Follow