import './App.css';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';
import DonatePage from './pages/DonatePage';
import ProjectsPage from './pages/ProjectPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path='/' element={<ProjectsPage />}></Route>
            <Route path='/projects' element={<ProjectsPage />}></Route>
            <Route
              path='/donate/:projectName/:projectId'
              element={<DonatePage />}
            ></Route>
            <Route path='/cart' element={<CartPage />}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
