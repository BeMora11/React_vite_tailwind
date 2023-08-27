import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../context';
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const leftOptions = () => {
  let options = [
    { name: 'Shopi', path: '/', className: 'font-semibold text-lg', activeStyle: false },
    { name: 'All', path: '/', activeStyle: true, category: "all" },
    { name: 'Electronics', path: '/electronics', activeStyle: true, category: "electronics" },
    { name: 'Jewelery', path: '/jewelery', activeStyle: true, category: "jewelery" },
    { name: 'Mens clothing', path: '/mens-clothing', activeStyle: true, category: "mens_clothing" },
    { name: 'Womens clothing', path: '/womens-clothing', activeStyle: true, category: "womens_clothing" },
  ];

  return options;
}

const rightOptions = () => {
  let options = [
    { name: 'My orders', path: '/my-orders' },
    { name: 'My account', path: '/my-account' },
    { name: 'Sign in', path: '/sign-in' },
  ];

  return options;
}

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const leftOptionsMenu = leftOptions();
  const rightOptionsMenu = rightOptions();
  const activeStyle = 'underline underline-offset-4';

  return (
    <nav
      className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0'
    >
      <ul className='flex items-center gap-3'>
        {leftOptionsMenu.map((item, index) => (
          <li className={item?.className} key={index}>
            <NavLink
              to={item.path}
              onClick={() => item?.category && context.setSearchByCategory(item?.category == "all" ? null : item.category)}
              className={({ isActive }) =>
                isActive && item?.activeStyle ? activeStyle : undefined
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          email@email.en
        </li>
        {rightOptionsMenu.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
        <li className='flex items-center gap-x-1'>
          <ShoppingBagIcon className="h-6 w-6 text-black" />
          {context.cartProducts.length}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar