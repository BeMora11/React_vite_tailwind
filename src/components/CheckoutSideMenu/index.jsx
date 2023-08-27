import React, { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context';
import './style.css';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';
import { Link } from 'react-router-dom';

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    console.log(id);
    const filteredProducts = context.cartProducts.filter(item => item.id != id);
    context.setCartProducts(filteredProducts);
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.closecheckoutSideMenu();
    context.setSearchByTitle(null);
  }

  return (
    <aside
      className={`${context.ischeckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed bg-white right-0 border border-black rounded-lg`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My order</h2>
        <div>
          <XMarkIcon
            onClick={() => context.closecheckoutSideMenu()}
            className="h-6 w-6 text-black cursor-pointer"
          />
        </div>
      </div>
      <div className="px-6 overflow-y-auto flex-1">
        {
          context?.cartProducts.map((item) => (
            <OrderCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className='px-6 py-2 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className='w-full bg-black py-3 text-white rounded-lg ' onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu