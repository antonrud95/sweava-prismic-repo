import React from 'react';
import PropTypes from 'prop-types';
import Info from '../ui/Info/Info';

const InfoFirst = ({slice}) => {
    return (
        <Info 
            sectionTitle={slice.primary.sectiontitle.text}
            title={slice.primary.title.text}
            upperTitle={slice.primary.uppertitle.text}
            text={slice.primary.description.text}
            image={slice.primary.image.fluid.src}
            mobileimage={slice.primary.mobileimage.fluid.src}
        />
    )
}
InfoFirst.propTypes = {
    slice: PropTypes.object.isRequired,
}
export default InfoFirst