import React, { FC } from 'react'

import styles from './Card.module.css';

interface ICard {
  id: number;
  name: string;
  content: string;
  price: number;
  image_url: string;
  discount_percent: number;
}

const Card: FC<ICard> = ({ id, name, content, price, image_url, discount_percent }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={image_url} alt="card" />
      <p className={styles.title}>{name}</p>
      <p className={styles.content}>{content}</p>
      <p className={styles.price}>{price}</p>
    </div>
  )
}

export default Card