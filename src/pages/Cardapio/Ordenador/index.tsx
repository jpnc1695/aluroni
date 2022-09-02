import style from './Ordenador.module.scss'
import opcoes from './opcoes.json'
import { useState } from 'react'

interface Props {
  ordenador:string,
  setOrdenador:React.Dispatch<React.SetStateAction<string>>
}

const Ordenador = ({ordenador, setOrdenador}:Props) => {

  const[aberto, setAberto] = useState(false)

  return(
       <button className={style.ordenador} onClick={()=> setAberto(!aberto)}>
            <span>Ordenador ordena à dor </span>
            <div className={style.ordenador__options}>
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