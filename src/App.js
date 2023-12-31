import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import BagShop from './pages/BagShop';
import FooterCopyRight from './components/FooterCopyRight'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/bagshop" element={<BagShop />} />
      </Routes>
      <FooterCopyRight/>
    </BrowserRouter>
  );
}

export default App;
