import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './components/pages/products/Products'
import Basket from './components/pages/basket/Basket';
import ProductBody from './components/pages/productBody/ProductBody';
import GeneralPage from './components/pages/general/GeneralPage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import FormReg from './components/pages/general/FormReg';
import FormAuthor from './components/pages/general/FormAuthor';
import ErrorPage from './components/pages/errorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralPage/>,
    children: [
      {
        path: "/",
        element: <FormAuthor/>,
      },
      {
        path: "/registration",
        element: <FormReg/>,
      },
    ]
  },
  {
    path: "/product",
    element: <Products/>,
  },
  {
    path: "/basket",
    element: <Basket/>,
  },
  {
    path: "/product/:id",
    element: <ProductBody/>,
  },
  {
    path: "/*",
    element: <ErrorPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
