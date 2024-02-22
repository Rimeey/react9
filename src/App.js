import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import { Routes, Route } from 'react-router-dom';

import Books from './Components/Books/Books';
import Visitors from './Components/Visitors/Visitors';
import Cards from './Components/Cards/Cards';
import Statistics from './Components/Statistics/Statistics';
import NotFound from './Components/NotFound/NotFound';
import ModalWindow from './Components/ModalWindow/ModalWindow';

function App() {
  return (
    <>
    <Header />
      <Menu />
      <Routes>
        <Route path='/' element={<Books/>}></Route>
        <Route path='/visitors' element={<Visitors/>}></Route>
        <Route path='/cards' element={<Cards/>}></Route>
        <Route path='/statistics' element={<Statistics/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <ModalWindow/>
    </>

  )
}

export default App;
