import style from  './Cardapio.module.scss'
import {ReactComponent as Logo} from 'assets/logo.svg'

const Cardapio = () => {
 return (
    <main>
      <nav className={style.menu}> 
          <Logo/>
          <header className={style.header}>
            <div className={style.header__text}>

            </div>
          </header>  
       </nav>
    </main>
 )
}

export default Cardapio