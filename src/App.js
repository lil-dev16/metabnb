import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import placeToStay from './pages/placeToStay';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/placeToStay' element={<placeToStay />} />
      </Routes>
    </div>
  );
}

export default App;
