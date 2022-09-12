import cardapio from '../../data/cardapio.json'
import styles from './Inicio.module.scss'
import stylesTema from 'styles/Tema.module.scss'

const Inicio = () => {

let pratosRecomendados = [...cardapio];
pratosRecomendados = pratosRecomendados.sort(()=> 0.5 - Math.random()).splice(0,3);

  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Recomendações da cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(item => (
           <div key={item.id} className={styles.recomendado}>
                <div className={styles.recomendado__imagem}>
                  <img src={item.photo} alt={item.title} />
                </div>
                <button className={styles.recomendado__botao }>
                  ver mais
                </button>
           </div>
        ))}
      </div>
    </section>
  );
}

export default Inicio