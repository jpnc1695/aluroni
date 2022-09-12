import styles from './NotFound.module.scss'
import {ReactComponent as NotFoundImg} from 'assets/not_found.svg'
import classNames from 'classnames';
import stylesTema from 'styles/Tema.module.scss'

const NotFound = () => {
  return (
      <div className={classNames({
         [styles.container]: true,
         [stylesTema.container]:true
      })}>
        <NotFoundImg/>
      </div>
  )
}

export default NotFound