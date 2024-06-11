import logo from './logo.svg';
import './App.css';
import AddCourse from './components/AddCourse';
import SearchCourse from './components/SearchCourse';
import ViewCourse from './components/ViewCourse';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddCourse/>}/>
      <Route path='/search' element={<SearchCourse/>}/>
      <Route path='/view' element={<ViewCourse/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
