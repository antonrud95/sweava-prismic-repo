import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

import styles from './products.module.scss'

const Products = ({slice}) => {
    return(
        <Container className={styles.productsWrapper}>
            <Row className={styles.row}>
                <Col xs="12" md="6" className={styles.contentWrapper}>
                    <h2 className={styles.productsTitle}>{slice.primary.title.text}</h2>
                    <p className={styles.productsText}>{slice.primary.description.text}</p>
                </Col>
                <Col xs="12" md="6" className={styles.imageWrapper}>
                    <img src={slice.primary.image.fluid.src} alt="products" className={styles.image}/>
                </Col>
            </Row>
            <span className={styles.firstOrnament}/>
            <span className={styles.secondOrnament}/>
            <span className={styles.thirdOrnament}/>
            <span className={styles.fourthOrnament}/>
        </Container>
    )
}
Products.propTypes = {
    slice: PropTypes.object.isRequired,
}
export default Products