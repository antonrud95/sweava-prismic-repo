import React from 'react';
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'react-bootstrap'

import styles from './account.module.scss'

const Account = ({sectionTitle, image, mobileimage, upperTitle, title, text}) => {
    return(
        <Container className={styles.accountWrapper}>
            <h3 className={styles.mainTitle}>{sectionTitle}</h3>
            <Row className={styles.row}>
                <Col xs="12" md="6" className={styles.imageWrapper}>
                    <img src={image} alt="account" className={styles.image}/>
                    <img src={mobileimage} alt="mobile" className={styles.mobileimage}/>
                </Col>
                <Col xs="12" md="6" className={styles.contentWrapper}>
                    <h4 className={styles.contentTitle}>{upperTitle}</h4>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.text}>{text}</p>
                </Col>
            </Row>
        </Container>
    )
}
Account.propTypes = {
    sectionTitle: PropTypes.string.isRequired,
    upperTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    mobileimage: PropTypes.any.isRequired,
}
export default Account