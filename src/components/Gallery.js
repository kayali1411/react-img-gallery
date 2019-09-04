import React, { useState, useEffect } from 'react';
import styles from '../styles/Gallery.module.css';

const Gallery = (props) => {
    const [imgSrc, setImgSrc] = useState('');

    const displayImage = (e) => {
        setImgSrc(e.target.src);
    }

    useEffect(() => {
        setImgSrc(document.querySelector('#images-list img').src);
    }, []);

    return (
        <div id="image-gallery" className={styles.gallery}>
            <div className={styles.slider_area}>
                <img className={styles.slider_image} src={imgSrc} alt="" />
            </div>
            <div id="images-list" className={styles.images_list}>
                {React.Children.map(props.children, (child, i) => <div onClick={displayImage} className={styles.image_block}>{child}</div> )}
            </div>
        </div>
    )
};

export default Gallery;