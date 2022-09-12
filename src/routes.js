import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Sobre from 'pages/Sobre';
import Menu from 'components/Menu'
import PAginaPadrao from 'components/PaginaPadrao'
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const AppRouter = () => {
 return(
  <main className='container'> 
    <Router>
      <Menu/>
        <Routes>
            <Route path='/' element={<PAginaPadrao/>}>
              <Route index element ={<Inicio/>}/>  
              <Route path='cardapio' element={<Cardapio/>}/>
              <Route path='sobre' element={<Sobre/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Route> 
        </Routes>
          <Footer/>
    </Router>
  </main>
 );
}

export default AppRouter