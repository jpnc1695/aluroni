import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const AppRouter = () => {
 return(
  <Router>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/cardapio' element={<Cardapio/>}/>
      </Routes>
  </Router>
 );
}

export default AppRouter