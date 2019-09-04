import React, { useState, useEffect } from 'react';

const Gallery = (props) => {
    const [imgSrc, setImgSrc] = useState('');

    const displayImage = (e) => {
        setImgSrc(e.target.src);
    }

    useEffect(() => {
        setImgSrc(document.querySelector('.image_block img').src);
    }, []);

    return (
        <div className="gallery">
            <div className="slider_area">
                <img src={imgSrc} alt="" />
            </div>
            <div className="images_list">
                {React.Children.map(props.children, (child, i) =>
                    (
                        <div onClick={displayImage} className="image_block">{child}</div>
                    )
                )}
            </div>
        </div>
    )
};

export default Gallery;