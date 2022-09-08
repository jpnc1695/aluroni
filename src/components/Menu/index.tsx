import {ReactComponent as Logo} from 'assets/logo.svg';
import styles from './menu.module.scss'

const Menu = () => {

  const rotas =  [{
     label: 'Início',
     to: '/'
  }, {
    label: 'Cardapio',
    to:'/cardapio'
  },{
    label:'Sobre',
    to:'/sobre'
  }];

  return(
     <div>
       <nav className={styles.menu}> 
        <Logo/> 
          <ul className={styles.menu__list}>
            {rotas.map((rota, index)=> (
              <li key={index} className={styles.menu__link}>
                 <a href={rota.to}> {rota.label} </a>
              </li>
              ))}
          </ul>
       </nav>
     </div>
  );
}

export default Menu;