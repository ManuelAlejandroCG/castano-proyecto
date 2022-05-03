import {Route,Routes} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ItemListContainer from './components/pages/ItemListContainer';
import ItemDetailContainer from './components/pages/ItemDetailContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>      
    </div>
  );
}

export default App;
