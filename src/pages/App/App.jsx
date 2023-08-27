import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom';
import HomePage from './../Home/index';
import MyAccountPage from '../MyAccount/index';
import MyOrderPage from './../MyOrder/index';
import MyOrdersPage from './../MyOrders/index';
import NotFoundPage from './../NotFound/index';
import SignInPage from './../SignIn/index';
import Navbar from '../../components/Navbar';
import { ShoppingCartProvider } from '../../context';
import CheckoutSideMenu from '../../components/CheckoutSideMenu';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/electronics', element: <HomePage /> },
    { path: '/jewelery', element: <HomePage /> },
    { path: '/mens-clothing', element: <HomePage /> },
    { path: '/womens-clothing', element: <HomePage /> },
    { path: '/others', element: <HomePage /> },
    { path: '/my-account', element: <MyAccountPage /> },
    { path: '/my-order', element: <MyOrderPage /> },
    { path: '/my-orders', element: <MyOrdersPage /> },
    { path: '/my-orders/last', element: <MyOrderPage /> },
    { path: '/my-orders/:id', element: <MyOrderPage /> },
    { path: '/*', element: <NotFoundPage /> },
    { path: '/sign-in', element: <SignInPage /> },
  ]);

  return routes;
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App
