import React, { FC, useEffect, useMemo, useState } from 'react';

import styles from './Cards.module.css';
import { useGetProducts } from '../../api/endpoints/products/get/getProducts';
import Card from '../Card/Card';
import { useNavigate } from 'react-router-dom';

interface Cards {
  sort: string;
}

const Cards: FC<Cards> = ({ sort = 'up' }) => {
  const products = useGetProducts();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.isSuccess) {
      setLoading(false);
    }
    if (products.isError) {
      setLoading(false);
    }
  }, [])

  const navigate = useNavigate();

  if (products.isLoading) {
    return (
      <div>isLoading</div>
    )
  }

  if (products.isError) {
    return (
      <div>Произошла ошибка. Обратитесь к админу</div>
    )
  }

  if (products.isSuccess) {
    const mappedProducts = products.data.data.data.map((product) => {
      return (
        <Card
          onClick={() => {
            return navigate(`/products/${product.id}`);
          }}
          key={product.id}
          name={product.name}
          price={product.price}
          id={product.id}
          content={product.text}
          image_url={product.preview_image}
          discount={product.discount}
        /> 
    )});
    
    if (sort === 'down') {
      const filteredProducts =  mappedProducts.sort((a, b) => b.props.price - a.props.price);
      return (
        <div className={styles.wrapper}>
          {...filteredProducts}
        </div>
      );
    }

    if (sort === 'up') {
      const filteredProducts =  mappedProducts.sort((a, b) => a.props.price - b.props.price);
      return (
        <div className={styles.wrapper}>
          {...filteredProducts}
        </div>
      );
    }
  }  
    return (
      <div>loading</div>
    )
};

export default Cards;
