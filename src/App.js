import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import Tasks from './Components/Tasks';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import TaskEdit from './Components/TaskEdit';
import TaskPage from './Pages/TaskPage';

function App() {
  return (
    <div >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskPage/>}/>
            <Route path="/TaskPage" element={<TaskPage/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/TaskAdd" element={<TaskEdit/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
