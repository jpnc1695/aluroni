import {ReactComponent as Logo} from 'assets/logo.svg';
import { useState } from 'react';
import style from  './Cardapio.module.scss';
import Buscador from './Buscador';
import Filtros from './Filtros';
import Ordenador from './Ordenador';

const Cardapio = () => {

  const [busca, setBusca] = useState('');
  const [filtro, setFiltro]= useState<number|null>(null);
  const [ordenador, setOrdenador] = useState('');
  
 return (
    <main>
      <nav className={style.menu}> <Logo/> </nav>
          <header className={style.header}>
            <div className={style.header__text}>
               A casa do código e da massa 
            </div>
          </header>  
          <section className={style.cardapio}>
            <h3 className={style.cardapio__titulo}> Cardápio </h3>
                <Buscador busca={busca} setBusca={setBusca}/>
             <div className={style.cardapio__filtros}>  
                <Filtros filtro={filtro} setFiltro={setFiltro}/>
                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
             </div>
          </section>
    </main>
 )
}

export default Cardapio