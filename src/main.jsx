import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthProvider from './AuthContext/AuthProvider';
import AllProducts from './components/AllProducts/AllProducts';
import Home from './components/Home/Home';
import Login from './components/LogIn/Login';
import Register from './components/Register/Register';
import './index.css';
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
      }
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
