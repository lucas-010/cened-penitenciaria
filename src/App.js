import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginHome from './Pages/LoginHome';
import Manager from './Pages/Manager';

function App() {
  return (
    <div className="overflow-x-hidden"> 
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path='/' element={<LoginHome/>}/>
          <Route path='/matriculas' element={<Manager/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 