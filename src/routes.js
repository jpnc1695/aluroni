import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Sobre from 'pages/Sobre';
import Menu from 'components/Menu'
import PAginaPadrao from 'components/PaginaPadrao'
import Footer from 'components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const AppRouter = () => {
 return(
  <main> 
    <Router>
      <Menu/>
        <Routes>
            <Route path='/' element={<PAginaPadrao/>}>
              <Route index element ={<Inicio/>}/>  
              <Route path='cardapio' element={<Cardapio/>}/>
              <Route path='sobre' element={<Sobre/>}/>
            </Route> 
        </Routes>
          <Footer/>
    </Router>
  </main>
 );
}

export default AppRouter