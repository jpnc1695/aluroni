import cardapio from './itens.json'; 
import Item from './Item';
import style from './Itens.module.scss';
import { useEffect, useState } from 'react';

interface Props {
  busca:string,
  filtro:number | null
  ordenador:string
}

const Itens = ({busca, filtro}:Props) => {

  const [lista, setLista] = useState(cardapio)

  const testaBusca = (title:string)=> {
    const regex = new RegExp(busca, 'i');
    return regex.test(title)
  }

  const testaFiltro = (id:number)=> {
    if(filtro !== null) return filtro === id
    return true
  }

  useEffect(()=>{
    const novaLista = cardapio.filter(item =>  testaBusca(item.title) && testaFiltro(item.category.id));

    setLista(novaLista)
  },[busca, filtro])

  return(
    <div className={style.itens}>
     {lista.map(item => 
        <Item key={item.id} {...item}/>
     )}
    </div>
  )
}

export default Itens