import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import { ShoppingCartContext } from '../../context'
import OrderCard from '../../components/OrderCard';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link, useParams } from 'react-router-dom';

const MyOrderPage = () => {
  const context = useContext(ShoppingCartContext);
  const params = useParams();
  let index = params.id;
  if (!index) index = context.order?.length - 1;

  return (
    <Layout>
      <div className='flex w-80 items-center justify-center relative mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          context.order?.[index]?.products.map((item) => (
            <OrderCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrderPage