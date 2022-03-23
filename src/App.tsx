import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../src/pages/Home';
import NewRoom from './pages/NewRoom';

import './styles/global.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/newroom' element={<NewRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;