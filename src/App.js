import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginHome from './Components/LoginArea/LoginHome';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginHome/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
