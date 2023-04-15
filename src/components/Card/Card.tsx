import React, { FC } from 'react'
import { getDiscountPrice } from '../../utils/getDiscountPrice';

import styles from './Card.module.css';

interface ICard {
  id: number;
  name: string;
  content: string;
  price: number;
  image_url: string;
  discount: number;
  onClick?: () => void;
}

const Card: FC<ICard> = ({ id, name, content, price, image_url, discount, onClick }) => {
  return (
    <div onClick={onClick} className={styles.wrapper}>
      <img className={styles.image} src={image_url} alt="card" />
      <p className={styles.title}>{name}</p>
      <p className={styles.content}>{content}</p>
      <div className={styles.priceWrapper}>
      <p className={styles.lastPrice}>{price} ₽</p>
      <p className={styles.newPrice}>{getDiscountPrice(price, discount)} ₽</p>
      </div>
    </div>
  )
}

export default Card