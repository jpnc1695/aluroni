import style from './Ordenador.module.scss'
import opcoes from './opcoes.json'


const Ordenador = () => {
  return(
       <button className={style.ordenador}>
            <span>Ordenador ordena a dor </span>
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