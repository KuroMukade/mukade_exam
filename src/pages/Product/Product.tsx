import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsById } from '../../api/endpoints/products/get/getProducts';
import { getDiscountPrice } from '../../utils/getDiscountPrice';

import styles from './Product.module.css';

const Product: FC = () => {
  const params = useParams();
  const product = useGetProductsById({id: params.id!})

  if (product.isError) {
    return (
      <div>Произошла ошибка! Обратитесь к администрации сайта</div>
    )
  }  

  return (
    <div>
      <div className={styles.wrapper}>
        {product.isLoading && 'Data is loading...'}
        {product.isSuccess && (
          <div className={styles.card}>
            <div className={styles.left}>
              <h1 className={styles.title}>{product.data.data.data.name}</h1>
              <img className={styles.img} src={product.data.data.data.preview_image} />
            </div>
            <div className={styles.right}>
              <p className={styles.content}>{product.data.data.data.text}</p>
              <div className={styles.saleWrapper}>
                <p className={styles.price}>{product.data.data.data.price}</p>
                <p className={styles.sale}>
                  {getDiscountPrice(product.data.data.data.price, product.data.data.data.discount)}
                </p>
              </div>
              <button className={styles.button}>Заказать</button>
            </div>
          </div>
        )}
        </div>
    </div>
  )
}

export default Product