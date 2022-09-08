import {ReactComponent as Logo} from 'assets/logo.svg';
import styles from './menu.module.scss'

const Menu = () => {
  return(
     <div>
       <nav className={styles.menu}> <Logo/> </nav>
     </div>
  );
}

export default Menu;