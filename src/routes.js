import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Menu from 'components/Menu'
import PAginaPadrao from 'components/PaginaPadrao'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const AppRouter = () => {
 return(
  <main>
    <Router>
      <Menu/>
        <Routes>
          <Route path='/'>
              <PAginaPadrao>
                  <Inicio/>
              </PAginaPadrao>
          </Route>
        </Routes>
    </Router>
  </main>
 );
}

export default AppRouter