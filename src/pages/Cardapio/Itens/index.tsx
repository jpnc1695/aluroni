import cardapio from './itens.json'; 
import Item from './Item';
import style from './Itens.module.scss';
import { useEffect, useState } from 'react';

interface Props {
  busca:string,
  filtro:number | null
  ordenador:string
}

const Itens = ({busca, filtro, ordenador}:Props) => {

  const [lista, setLista] = useState(cardapio)

  const testaBusca = (title:string)=> {
    const regex = new RegExp(busca, 'i');
    return regex.test(title)
  }

  const testaFiltro = (id:number)=> {
    if(filtro !== null) return filtro === id
    return true
  }
  
  const ordenarPropriedadeCrescente = (
        lista: typeof cardapio, 
        propriedade: 'size' | 'serving'| 'price'
        ) => {
         return lista.sort((a,b)=> a[propriedade] > b[propriedade] ? 1 : -1)
  }
  
  const ordenar = (lista: typeof cardapio) => {
      switch(ordenador){
        case 'porcao':
          return ordenarPropriedadeCrescente(lista, 'size')
        case 'qtd_pessoas':
          return ordenarPropriedadeCrescente(lista, 'serving') 
        case 'preco':
          return ordenarPropriedadeCrescente(lista, 'price')
        default:
          return lista  
      }
  }


  useEffect(()=>{
    const novaLista = cardapio.filter(item =>  testaBusca(item.title) && testaFiltro(item.category.id));

    setLista(ordenar(novaLista))
  },[busca, filtro, ordenador])

  return(
    <div className={style.itens}>
     {lista.map(item => 
        <Item key={item.id} {...item}/>
     )}
    </div>
  )
}

export default Itens