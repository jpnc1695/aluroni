import style from './Item.module.scss'
import Tags from 'components/Tags'
import {Prato} from 'types/Prato'

const Item = (props:Prato ) => {

  const {title, description, photo} = props;
  
  return (
    <div className={style.item}>
        <div className={style.item__imagem}>
            <img src={photo} alt={title} />
        </div>

        <div className={style.item__descricao }>
            <div className={style.item__titulo}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div> 
            <Tags {...props} />
      </div>
    </div>
  )
}

export default Item