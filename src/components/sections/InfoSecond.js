import React from 'react';
import PropTypes from 'prop-types';
import Info from '../ui/Info/Info';

const InfoSecond = ({slice}) => {
    return (
        <Info 
            title={slice.primary.title.text}
            upperTitle={slice.primary.uppertitle.text}
            text={slice.primary.text.text}
            image={slice.primary.image.fluid.src}
            mobileimage={slice.primary.mobileimage.fluid.src}
        />
    )
}
InfoSecond.propTypes = {
    slice: PropTypes.object.isRequired,
}
export default InfoSecond