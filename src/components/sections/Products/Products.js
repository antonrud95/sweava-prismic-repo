import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

import styles from './products.module.scss'

const Products = ({title, description, image}) => {
    return(
        <Container className={styles.productsWrapper}>
            <Row className={styles.row}>
                <Col xs="12" md="6" className={styles.contentWrapper}>
                    <h2 className={styles.productsTitle}>{title}</h2>
                    <p className={styles.productsText}>{description}</p>
                </Col>
                <Col xs="12" md="6" className={styles.imageWrapper}>
                    <img src={image} alt="products" className={styles.image}/>
                </Col>
            </Row>
        </Container>
    )
}
Products.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
}
export default Products