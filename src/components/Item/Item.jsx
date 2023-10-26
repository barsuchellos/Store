import React from 'react';
import styles from './styles.module.scss'
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';

const Item = ({ id, title, price, image }) => {

    const item = { id, title, price, image }
    const dispatch = useDispatch();
    const favourite = useSelector(state => state.modal.favourite)
    
    const addItem = () => {
        if (!favourite.includes(item)) {
            dispatch({ type: "ADD_FAVOURITE_ITEM", payload: item })
        }
    }

    return (
        <li key={id} className={styles.item}>
            <img src={image} alt="" style={{ width: 200, height: 220 }} />
            <h4 className={styles.item__title}>{title}</h4>
            <p className={styles.item__price}>{price} $</p>
            <Button text='Buy' onClick={addItem} />
        </li>
    );
};

export default Item;