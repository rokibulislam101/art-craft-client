import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Components/authProvider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import AllArtCraftItems from './Components/AllArtCraftItems/AllArtCraftItems';
import MyArtCraftList from './Components/MyArtCraftList/MyArtCraftList';
import AddCraftItem from './Components/AddCraftItem/AddCraftItem';
import TextileArts from './Components/TextileArts/TextileArts';
import UpdateCraftItem from './Components/UpdateCraftItem/UpdateCraftItem';

AOS.init();

const BASE_URL = 'http://localhost:5000/craft';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch(BASE_URL),
      },
      {
        path: '/data/:id',
        element: (
          <PrivateRoute>
            <TextileArts />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${BASE_URL}/${params.id}`),
      },
      {
        path: '/allArtCraftItems',
        element: <AllArtCraftItems />,
        loader: () => fetch(BASE_URL),
      },
      {
        path: '/addCraftItem',
        element: (
          <PrivateRoute>
            <AddCraftItem />
          </PrivateRoute>
        ),
      },
      {
        path: '/updateCraftItem/:id',
        element: <UpdateCraftItem />,
        loader: ({ params }) => fetch(`${BASE_URL}/${params.id}`),
      },
      {
        path: '/myArtCraftList',
        element: (
          <PrivateRoute>
            <MyArtCraftList />
          </PrivateRoute>
        ),
        loader: () => fetch(BASE_URL),
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
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
