import logo from './logo.svg';
import './App.css';
import AddBooks from './components/AddBooks';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewBook from './components/ViewBook';

function App() {
  return (
    <div>
     <AddBooks/>
     <br></br>
     <Search/>
     <br></br>
     <Delete/>
     <br></br>
     <ViewBook/>
    </div>
  );
}

export default App;
