import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import SignIn from './routes/sign-in/SignIn';
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/Checkout';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />}></Route>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
