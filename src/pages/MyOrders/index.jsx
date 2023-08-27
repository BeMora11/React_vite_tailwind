import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import OrdersCard from '../../components/OrdersCard'
import { ShoppingCartContext } from '../../context'
import { Link } from 'react-router-dom'

const MyOrdersPage = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex w-80 items-center justify-center relative mb-4'>
        <h1 className='font-medium text-xl'>My orders</h1>
      </div>
      {
        context.order.map((item, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={item.totalPrice}
              totalProducts={item.totalProducts}
            />
          </Link>
        ))
      }
    </Layout>
  )
}

export default MyOrdersPage