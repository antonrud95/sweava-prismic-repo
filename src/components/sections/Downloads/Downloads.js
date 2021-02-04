import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'react-bootstrap';
import Button from '../../ui/Button/Button';

import styles from './downloads.module.scss'

const Downloads = ({image, mobileimage, title, button}) => {
    return(
        <Container className={styles.downloadsContainer}>
            <Row className={styles.row}>
                <Col xs="12" md="7" className={styles.contentWrapper}>
                    <h2>{title}</h2>
                    <Button variant="secondary" additionalClasses={styles.downloadsButton}>
                        {button}
                    </Button>
                </Col>
                <Col xs="12" md="5" className={styles.imageWrapper}>
                    <img src={mobileimage} alt="mobile" className={styles.imageMobile}/>
                    <img src={image} alt="desktop" className={styles.image}/>
                </Col>
            </Row>
        </Container>
    )
}
Downloads.propTypes = {
    image: PropTypes.any.isRequired,
    mobileimage: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
}
export default Downloads

