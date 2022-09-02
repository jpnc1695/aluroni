import style from './Ordenador.module.scss'
import opcoes from './opcoes.json'
import { useState } from 'react'
import classNames from 'classnames'

interface Props {
  ordenador:string,
  setOrdenador:React.Dispatch<React.SetStateAction<string>>
}

const Ordenador = ({ordenador, setOrdenador}:Props) => {

  const[aberto, setAberto] = useState(false)

  return(
       <button 
            className={style.ordenador} 
            onClick={()=> setAberto(!aberto)}
            onBlur={()=> setAberto(false)}
       >
            <span>Ordenador ordena à dor </span>
            
            <div className={classNames({
               [style.ordenador__options]:true,
               [style['ordenador__options--ativo']]:aberto
                })}>
                {opcoes.map(opcao => (
                    <div className={style.ordenador__option} key={opcao.value}>
                      {opcao.nome}
                    </div>  
                ))}
            </div>
        </button>
  )
}

export default Ordenador