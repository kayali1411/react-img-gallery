import React, { useState, useEffect } from 'react';
import styles from '../styles/Gallery.module.css';
import Modal from './Modal';
import rightArrow from '../../icons/right_arrow.png';
import leftArrow from '../../icons/left_arrow.png';

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
        const value     = e.target.nodeName === 'IMG' ? e.target.parentElement.getAttribute('data-value') : e.target.getAttribute('data-value');
        const direction = value > 0 ? 'left' : 'right';

        if(currentThumbnail === lastThumbnail && direction === 'right') return;
        if(currentThumbnail === 0 && direction === 'left') return;

        setCurrentThumbnail(currentThumbnail - value);
        setThumbnailLeft(Number(thumbnailLeft) + (value * 20));
    };

    useEffect(() => {
        const images = document.querySelectorAll('#images-list img');
        setImgSrc(images[props.mainImg].src);
        let max = 0;
        images.forEach((img) => max = img.offsetHeight > max ? img.offsetHeight : max);
        setThumbnailHeight(max);
    }, []);

    return (
        <div id="image-gallery" className={styles.gallery}>
            {props.modalIsEnabled ? (<Modal imgSrc={imgSrc} enableFullScreenIcon={true} />) : (
                <div className={styles.slider_area}>
                    <img className={styles.slider_image} src={imgSrc} alt="" />
                </div>
            )}
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
                {lastThumbnail > 0 && (
                    <div>
                        <button className={[styles.left_btn, styles.button].join(' ')} onClick={handelThumbnailSlider} data-value={1}><img className={styles.icon} src={props.thumbnailLightArrow} alt="left arrow"/></button>
                        <button className={[styles.right_btn, styles.button].join(' ')} onClick={handelThumbnailSlider} data-value={-1}><img className={styles.icon} src={props.thumbnailRightArrow} alt="right arrow"/></button>
                    </div>
                )}
            </div>
        </div>
    )
};

Gallery.defaultProps = {
    modalIsEnabled: false,
    mainImg: 0,
    thumbnailRightArrow: rightArrow,
    thumbnailLightArrow: leftArrow
};

export default Gallery;