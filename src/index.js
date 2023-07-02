import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Provider } from 'react-redux';
import Auth from './Auth';
import News from './Pages/News/News';
import Cart from './Pages/Cart/Cart';
import Store from './Pages/Store/Store';
import Game from './Pages/Game/Game';
import MostPopular from './Pages/MostPopular/MostPopular';
import Login from './Pages/Login/Login';
import { ProtectedRoute } from './Auth/ProtectedRoute';
import { AuthProvider } from './Auth/AuthContext';

const router = createBrowserRouter([
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'/',
        element:<ProtectedRoute><App /></ProtectedRoute> 
    },
    {
        path:'/news',
        element:<ProtectedRoute><News /></ProtectedRoute> 
    },
    {
        path:'/cart',
        element:<ProtectedRoute><Cart /></ProtectedRoute> 
    },
    {
        path:'/store',
        element:<ProtectedRoute><Store /></ProtectedRoute> 
    },
    {
        path:'game/:name',
        element:<ProtectedRoute><Game /></ProtectedRoute> 
    },
    {
        path:'/most-popular',
        element:<ProtectedRoute><MostPopular /></ProtectedRoute> 
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <RouterProvider router={router}/>
    </AuthProvider>
);