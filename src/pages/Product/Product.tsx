import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card/Card';
import { useGetRequestsById } from '../../api/endpoints/requests/get/getRequests';

const Product = () => {
  const params = useParams();

  const product = useGetRequestsById({id: '1'})

  useEffect(() => {
    console.log(product)
  }, [])

  return (
    <Card id={0} name={''} content={''} price={0} image_url={''} discount_percent={0} />
  )
}

export default Product