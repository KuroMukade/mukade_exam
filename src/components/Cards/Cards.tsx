import React, { FC } from 'react';

import styles from './Cards.module.css';
import { useGetRequests } from '../../api/endpoints/requests/get/getRequests';
import Card from '../Card/Card';

const Cards: FC = () => {
  const requests = useGetRequests();

  return (
    <div className={styles.wrapper}>
      {requests.isLoading && 'loading'}
      {requests.isSuccess &&
        requests.data.data.data.map((request) => (
          <Card
            key={request.id}
            name={request.name}
            price={request.price}
            id={request.id}
            content={request.content}
            image_url={request.image_url}
            discount_percent={request.discount_percent}
          />
        ))}
    </div>
  );
};

export default Cards;
