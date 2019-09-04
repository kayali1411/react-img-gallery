import React, { useState, useEffect } from 'react';
import styles from '../styles/Gallery.module.css';

const Gallery = (props) => {
    const [imgSrc, setImgSrc] = useState('');
    const [thumbnailHeight, setThumbnailHeight] = useState('');

    const displayImage = (e) => {
        setImgSrc(e.target.src);
    }

    useEffect(() => {
        const el = document.querySelector('#images-list img');
        setImgSrc(el.src);
        setThumbnailHeight(el.offsetHeight);
    }, []);

    return (
        <div id="image-gallery" className={styles.gallery}>
            <div className={styles.slider_area}>
                <img className={styles.slider_image} src={imgSrc} alt="" />
            </div>
            <div id="images-list" className={styles.images_list} style={{height: thumbnailHeight}}>
                <div id="grid-slider" className={styles.grid_slider} style={{height: thumbnailHeight}}>
                    {React.Children.map(props.children, (child, i) => (
                        <div
                            key={i}
                            onClick={displayImage}
                            className={styles.image_block}
                            style={{
                                left: (i+1)*20 + '%'
                            }}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Gallery;