import logo from './logo.svg';
import './App.css';
import AddCourse from './components/AddCourse';
import SearchCourse from './components/SearchCourse';
import ViewCourse from './components/ViewCourse';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <AddCourse/>
      <SearchCourse/>
      <ViewCourse/>
      
    </div>
  );
}

export default App;
