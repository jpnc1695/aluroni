import style from './PaginaPadrao.module.scss'
import {Outlet} from 'react-router-dom'

const Header = ()=> {
  return (
        <>
            <header className={style.header}>
                <div className={style.header__text}>
                  A casa do código e da massa 
                </div>
            </header> 
            <div>
              <Outlet/>
            </div>
        </>
   );
}

export default Header