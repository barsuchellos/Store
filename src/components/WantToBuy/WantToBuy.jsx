import React from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import FavouriteItem from '../FavouriteItem/FavouriteItem';
const modalRoot = document.getElementById("modal-root")

const WantToBuy = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.modal)

    const onClose = () => {
        dispatch({ type: "CLOSE_MODAL", visible: false })
    }

    const elements = items.favourite.map(({ id, title, price, image }) => {
        return (
            <FavouriteItem key={id} title={title} price={price} image={image} />
        )
    })

    return (
        <>
            {createPortal(
                <div className={styles.modal}>
                    <div className={styles.modal__closeButton} onClick={onClose}>Close</div>
                    <div className={styles.modal__container}>
                        <h4 className={styles.modal__title}>Want to Buy:</h4>
                        <div className={styles.modal__itemsBox}>
                            {elements.length === 0 ? <p style={{ fontSize: 30, color: "white" }}>The basket is empty</p> : elements}
                        </div>
                    </div>
                </div>, modalRoot
            )}
        </>
    );
};

export default WantToBuy;