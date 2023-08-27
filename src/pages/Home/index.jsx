import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import { ShoppingCartContext } from '../../context'

const HomePage = () => {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredProducts?.length > 0) {
      if (context?.filteredProducts?.length > 0) {
        return (
          context?.filteredProducts?.map((item) => <Card key={item.id} data={item} />)
        );
      } else {
        return(
          <div>
            we don't have anything
          </div>
        );
      }
    } else {
      return (
        context?.products?.map((item) => <Card key={item.id} data={item} />)
      );
    }
  }

  return (
    <Layout>
      <div className='flex w-80 items-center justify-center relative mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input
        className='mb-2 rounded-lg border border-black w-80 p-4 focus:outline-none'
        type="text"
        placeholder='Search a product'
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default HomePage