import React, { useState, useEffect } from 'react';
import styles from '../styles/Gallery.module.css';

const Gallery = (props) => {
    const lastThumbnail = props.children.length - 5;
    const [imgSrc, setImgSrc] = useState('');
    const [thumbnailLeft, setThumbnailLeft] = useState(0);
    const [thumbnailHeight, setThumbnailHeight] = useState('');
    const [currentThumbnail, setCurrentThumbnail] = useState(0);



    const displayImage = (e) => {
        setImgSrc(e.target.src);
    }

    const handelThumbnailSlider = (e) => {
        const value     = Number(e.target.getAttribute('data-value'));
        const direction = value > 0 ? 'left' : 'right';

        if(currentThumbnail === lastThumbnail && direction === 'right') return;
        if(currentThumbnail === 0 && direction === 'left') return;

        setCurrentThumbnail(currentThumbnail - value);
        setThumbnailLeft(Number(thumbnailLeft) + (value * 20));
    };

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
                <div id="thumbnail-slider" className={styles.grid_slider} style={{height: thumbnailHeight}}>
                    {React.Children.map(props.children, (child, i) => (
                        <div
                            key={i}
                            onClick={displayImage}
                            className={styles.image_block}
                            style={{
                                left: Number(((i+1)*20)+ thumbnailLeft) + '%'
                            }}
                        >
                            {child}
                        </div>
                    ))}
                </div>
                <button onClick={handelThumbnailSlider} data-value={1}>Left</button>
                <button onClick={handelThumbnailSlider} data-value={-1}>Right</button>
            </div>
        </div>
    )
};

export default Gallery;