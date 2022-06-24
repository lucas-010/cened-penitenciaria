import {Routes, Route, BrowserRouter} from 'react-router-dom'
import LoginHome from './Pages/LoginHome';
import RegisteredsStudents from './Pages/RegisteredsStudents';

function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path='/' element={<LoginHome/>}/>
          <Route path='/CadastroDeAlunos' element={<RegisteredsStudents/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
