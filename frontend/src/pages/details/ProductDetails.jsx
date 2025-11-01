import React from 'react'
import './ProductDetails.css'
import { useGetoneProductQuery } from '../../Redux/productsApi';
export default function ProductDetails() {
    const { data, error, isLoading } = useGetoneProductQuery(1);
  console.log(data)
  if(data){
  return (
    <div>
    data-id:  {data.id}
    </div>
  )
}
}
