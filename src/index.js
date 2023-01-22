import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Provider } from 'react-redux';
import Auth from './Auth';
import News from './Pages/News/News';
import Cart from './Pages/Cart/Cart';
import Store from './Pages/Store/Store';

const router = createBrowserRouter([
    {
        path:'/',
        element:<App />
    },
    {
        path:'news',
        element:<News />
    },
    {
        path:'cart',
        element:<Cart />
    },
    {
        path:'store',
        element:<Store />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Auth}>
        <RouterProvider router={router}/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
