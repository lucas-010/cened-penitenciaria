import {Routes, Route} from 'react-router-dom'
import LoginHome from './Components/LoginArea/LoginHome';

function App() {
  return (
    <div className="">
        <Routes>
          <Route path='/' element={<LoginHome/>}/>
        </Routes>
    </div>
  );
}

export default App;
