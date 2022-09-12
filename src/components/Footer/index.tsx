import styles from './Footer.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg';

const Footer = () => {
  return (
     <footer className={styles.Footer}>
      <Logo/>
     </footer>
  )
}

export default Footer;