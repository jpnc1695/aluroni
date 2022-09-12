import { useState } from 'react';
import style from  './Cardapio.module.scss';
import stylesTema from 'styles/Tema.module.scss'
import Buscador from './Buscador';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';

const Cardapio = () => {

  const [busca, setBusca] = useState('');
  const [filtro, setFiltro]= useState<number|null>(null);
  const [ordenador, setOrdenador] = useState<string>('');
  
 return (
      <section className={style.cardapio}>
         <h3 className={stylesTema.titulo}> Cardápio </h3>
               <Buscador busca={busca} setBusca={setBusca}/>
            <div className={style.cardapio__filtros}>  
               <Filtros filtro={filtro} setFiltro={setFiltro}/>
               <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
            </div>
               <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
      </section>
 )
}

export default Cardapio