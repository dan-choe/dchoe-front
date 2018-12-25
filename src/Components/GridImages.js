import React from 'react';
import './GridImages.css';
import ImageBox from './ImageBox';

const GridImages = props => {

    const images = props.images.map((img) => {
        return (
            // <div key={img.id}>
                <ImageBox image={img} />
            // </div>
        );
    });

    return (
        <div className="image-list">{images}</div>
    );

};

export default GridImages;