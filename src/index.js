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
import Home from './Pages/Home/Home';

const router = createBrowserRouter([
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'/',
        element:<ProtectedRoute><App /></ProtectedRoute>,
        children:[
            {
                path:'/',
                element:<Home /> 
            },
            {
                path:'/news',
                element:<News /> 
            },
            {
                path:'/cart',
                element:<Cart />
            },
            {
                path:'/store',
                element:<Store />
            },
            {
                path:'game/:name',
                element:<Game />
            },
            {
                path:'/most-popular',
                element:<MostPopular />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <RouterProvider router={router}/>
    </AuthProvider>
);