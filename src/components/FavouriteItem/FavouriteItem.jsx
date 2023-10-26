import React from 'react';
import style from './style.module.scss'


const FavouriteItem = ({ id, title, price, image }) => {
    return (
        <li key={id} className={style.favouriteItem}>
            <div className={style.favouriteItem__image_box}>
                <img src={image} style={{height:100, width:100}} />
            </div>

            <div className={style.favouriteItem__info_box}>
                <h3>
                    {title}
                </h3>
                <p>
                    {price}
                </p>
            </div>
        </li>
    );
};

export default FavouriteItem;