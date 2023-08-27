import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = (props) => {
  const { id, title, image, price, handleDelete } = props;
  let renderXMarkIcon;
  if (handleDelete) {
    renderXMarkIcon = <XMarkIcon
      onClick={() => handleDelete(id)}
      className="h-6 w-6 text-black cursor-pointer"
    />;
  }

  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20 flex-1'>
          <img className='w-full h-full object-cover rounded-lg' src={image} alt={title} />
        </figure>
        <p className='text-sm font-light flex-1'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  )
}

export default OrderCard