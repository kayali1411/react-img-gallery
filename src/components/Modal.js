import React, { useState } from 'react';
import styles from '../styles/Modal.module.css';
import fullScreen from '../../icons/full_screen.png';

const Modal = (props) => {
    const [modalState, setModalState] = useState('closed');

    const handelOpenModal = () => {
        setModalState('open');
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }

    const handelCloseModal = () => {
        setModalState('closed');
        document.getElementsByTagName('body')[0].style.overflow = '';
    }

    return (
        <div className={styles.modal_area}>
            <img
                src={props.imgSrc}
                alt={props.imgAlt}
                className={styles.img}
                width={props.width}
                height={props.height}
                onClick={handelOpenModal}
            />
            {props.fullScreenIconEnabled && (<img onClick={handelOpenModal} className={styles.full_screen_icon} src={props.fullScreenIcon} alt="full screen"/>)}

            <div className={styles.modal} onClick={handelCloseModal} data-status={modalState}>
                <div className={styles.modal_content}>
                    <span className={styles.close} onClick={handelCloseModal}>&times;</span>
                    <img className={styles.modal_image} src={props.imgSrc} alt={props.imgAlt} />
                </div>
            </div>
        </div>
    )
};

Modal.defaultProps = {
    width: '100%',
    height: '100%',
    fullScreenIcon: fullScreen,
    fullScreenIconEnabled: true
}

export default Modal;