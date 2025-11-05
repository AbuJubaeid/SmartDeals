import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthProvider from './AuthContext/AuthProvider';
import AllProducts from './components/AllProducts/AllProducts';
import CreateProduct from './components/CreateProduct/CreateProduct';
import Home from './components/Home/Home';
import Login from './components/LogIn/Login';
import MyBids from './components/MyBids/MyBids';
import MyProducts from './components/MyProducts/MyProducts';
// import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Register from './components/Register/Register';
import './index.css';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RootLaayout from './RootLayout/RootLaayout';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLaayout,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path: 'allProducts',
        Component: AllProducts
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'myProducts',
        element: 
        <PrivateRoute>
          <MyProducts></MyProducts>
        </PrivateRoute>
      },
      {
        path: 'myBids',
        element: 
        <PrivateRoute>
          <MyBids></MyBids>
        </PrivateRoute>
      },
      {
        path: 'createProduct',
        element: 
        <PrivateRoute>
          <CreateProduct></CreateProduct>
        </PrivateRoute>
      },
      {
        path: 'productDetails/:id',
        loader:({params})=>fetch(`http://localhost:3000/products/${params.id}`),
        element: 
        <PrivateRoute>
          <ProductDetails></ProductDetails>
        </PrivateRoute>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
        <RouterProvider router={router} />,
     </AuthProvider>
  </StrictMode>,
)
