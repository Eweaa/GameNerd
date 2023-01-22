import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
import Cart from './Pages/Cart/Cart';
import { useSelector } from "react-redux";
import Login from './Pages/Login/Login';
import Store from './Pages/Store/Store';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="App">
      { !isLoggedIn && <Login />}
      { isLoggedIn && <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='news' element={<News />}/>
        <Route path='cart' element={<Cart />}/>
        <Route path='store' element={<Store />}/>
      </Routes>}
    </div>
  );
}

export default App;
