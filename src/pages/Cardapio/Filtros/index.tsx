import filtros from './filtros.json'
import style from './Filtros.module.scss'

type IOpcao = typeof filtros[0]
interface Props {
  filtro: number|null
  setFiltro: React.Dispatch<React.SetStateAction <number|null>>
}

const Filtros = ({filtro, setFiltro}:Props)=> {
 
  const selecionarFiltro = (opcao:IOpcao)=> {
    if(filtro === opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  }

  return(
      <div className={style.filtros}>
        {filtros.map((opcao) => 
          <button 
              className={
                `${style.filtros__filtro}
                 ${filtro === opcao.id ? style["filtros__filtro--ativo"]: ''}
                 `} 
              key={opcao.id} 
              onClick={() => selecionarFiltro(opcao)}
          >
              {opcao.label}
          </button>
        )}
      </div>
    )
}

export default Filtros