import { useEffect } from 'react';
import styles from './styles.module.scss'
import Item from '../Item/Item';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

const List = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.list.payload);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => dispatch({ type: "FETCH_DATA_SUCCESS", payload: json }))


    }, [])

    const elements = items.map(({ id, title, price, image }) => {
        return (
            <Item key={id} id={id} title={title} price={price} image={image} />
        )
    })


    return (
        <ul className={styles.container}>
            {elements}
        </ul>
    );
};

export default List;