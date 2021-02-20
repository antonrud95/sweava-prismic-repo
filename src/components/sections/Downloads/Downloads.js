import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'react-bootstrap';
import Button from '../../ui/Button/Button';

import styles from './downloads.module.scss'

const Downloads = ({slice}) => {
    return(
        <Container fluid className={styles.fluidContainer}>
            <Container className={styles.downloadsContainer}>
                <Row className={styles.row}>
                    <Col xs="12" md="7" className={styles.contentWrapper}>
                        <h2 className={styles.downloadsTitle}>{slice.primary.title.text}</h2>
                        <Button variant="secondary" additionalClasses={styles.downloadsButton}>
                            {slice.primary.button.text}
                        </Button>
                    </Col>
                    <Col xs="12" md="12" className={styles.imageWrapper}>
                        <img src={slice.primary.mobileimage.fluid.src} alt="mobile" className={styles.imageMobile}/>
                        <img src={slice.primary.image.fluid.src} alt="desktop" className={styles.image}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
Downloads.propTypes = {
    slice: PropTypes.object.isRequired,
}
export default Downloads

