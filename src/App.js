import logo from './logo.svg';
import './App.css';
import AddBooks from './components/AddBooks';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewBook from './components/ViewBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddBooks/>}/> 
      <Route path='/search' element={<Search/>}/> 
      <Route path='/delete' element={<Delete/>}/> 
      <Route path='/viewbook' element={<ViewBook/>}/> 


    </Routes>
    </BrowserRouter>
  );
}

export default App;
