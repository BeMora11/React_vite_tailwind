import React, { useContext } from 'react'
import './style.css';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  const product = context.productToShow;

  return (
    <aside
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed bg-white right-0 border border-black rounded-lg overflow-y-auto`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon
            onClick={() => context.closeProductDetail()}
            className="h-6 w-6 text-black cursor-pointer"
          />
        </div>
      </div>
      <figure className='px-6 h-2/5 w-full'>
        <img className='w-full h-full rounded-lg object-cover' src={product.image} alt={product.title} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl'>${product.price}</span>
        <span className='font-medium text-md'>{product.title}</span>
        <span className='font-light text-sm'>{product.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail