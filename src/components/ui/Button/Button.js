import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './button.module.scss'

const Button = ({children, variant, additionalClasses}) => {
    let variantStyles
  switch (variant) {
    case 'primary':
      variantStyles = styles.primary
      break
    case 'secondary':
      variantStyles = styles.secondary
      break
    default:
      break
  }
    return(
        <button
            className={classnames(
                styles.button,
                variantStyles,
                additionalClasses
            )}
        >
            {children}
        </button>
    )
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string.isRequired,
    additionalClasses: PropTypes.string,
}
export default Button