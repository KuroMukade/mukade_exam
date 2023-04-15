import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from './Header.module.css';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
            <Link to="/" className={styles.logo}>
                Flowers Store
            </Link>
            <nav className={styles.nav}>
                <ul className={styles.navWrapper}>
                    <li className={styles.navItem}><Link className={styles.headerLink} to=''>Главная</Link></li>
                    <li className={styles.navItem}><Link className={styles.headerLink} to='/cart'>Корзина</Link></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header;