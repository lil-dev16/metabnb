import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Place from './pages/Place';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/PlaceToStay' element={<Place />} />
      </Routes>
    </div>
  );
}

export default App;
