import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home'
import PortfolioItemPage from './screens/PortfolioItemPage';
import './App.css'
import NavBar from './components/NavBar';

function App() {

  return (
    <>
    {/* <NavBar/> */}
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:id" element={<PortfolioItemPage />} />
  </Routes>
  </>
  )
}

export default App
