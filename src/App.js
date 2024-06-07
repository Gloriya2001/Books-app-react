import logo from './logo.svg';
import './App.css';
import AddBooks from './components/AddBooks';
import Search from './components/Search';
import Delete from './components/Delete';

function App() {
  return (
    <div>
     <AddBooks/>
     <br></br>
     <Search/>
     <br></br>
     <Delete/>
    </div>
  );
}

export default App;
