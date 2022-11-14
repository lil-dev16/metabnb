import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PlaceToStay from './pages/PlaceToStay';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/placeToStay' element={<PlaceToStay />} />
      </Routes>
    </div>
  );
}

export default App;
