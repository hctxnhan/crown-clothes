import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import SignIn from './routes/sign-in/SignIn';
function Shop() {
  return <div className='shop'>I'm the Shop</div>;
}

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path={'/signin'} element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
