import styles from './styles.module.scss'
import basket from '../../images/header/Shopping-bag.svg'
import home from '../../images/header/Shop.svg'
import delivery from '../../images/header/Delivery.svg'
import WantToBuy from '../WantToBuy/WantToBuy';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const visible = useSelector(state => state.modal.visible)

    const openClick = () => {
        dispatch({ type: "OPEN_MODAL", visible: true })
    }

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div style={{ display: "flex" }}>
                    <div className={styles.header__itemsBox}>
                        <p>About Us</p>
                        <img src={delivery} alt="" />
                    </div>
                    <div className={styles.header__itemsBox}>
                        <p>Home</p>
                        <img src={home} alt="" />
                    </div>
                </div>


                <div onClick={openClick} className={styles.header__itemsBox}>
                    <div>
                        <img src={basket} alt="" />
                    </div>
                </div>
            </div>
            {visible && <WantToBuy />}
        </div>
    );
};

export default Header;