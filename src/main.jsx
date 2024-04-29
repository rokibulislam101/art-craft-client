import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './Components/authProvider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllArtCraftItems from './Components/AllArtCraftItems/AllArtCraftItems';
import AddCraftItem from './Components/AddCraftItem/AddCraftItem';
import TextileArts from './Components/TextileArts/TextileArts';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// ..
AOS.init();

const url = 'http://localhost:5000/craft';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => fetch(url),
      },
      {
        path: '/data/:id',
        element: (
          <PrivateRoute>
            <TextileArts></TextileArts>,
          </PrivateRoute>
        ),
        loader: async () => fetch(url),
      },
      {
        path: '/allArtCraftItems',
        element: <AllArtCraftItems></AllArtCraftItems>,
        loader: async () => fetch(url),
      },
      {
        path: '/addCraftItem',
        element: (
          <PrivateRoute>
            <AddCraftItem></AddCraftItem>,
          </PrivateRoute>
        ),
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
