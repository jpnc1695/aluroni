import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Menu from 'components/Menu'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const AppRouter = () => {
 return(
  <Router>
     <Menu/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/cardapio' element={<Cardapio/>}/>
      </Routes>
  </Router>
 );
}

export default AppRouter