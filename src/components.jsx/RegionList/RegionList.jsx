import styles from './RegionList.module.css';
import Icons from "../Icons/Icons";

const RegionList = () => {
  const regions = ["caba", "la-plata", "rosario"];

  return (
    <section className={styles.regionListContainer}>
      <h2 className={styles.message}>Elegí una región</h2>
      <ul className={styles.regionList}>
        {regions.map((region, index) => (
          <li key={index} className={styles.regionContainer}>
            <a href={`https://www.mapadelapolicia.com/${region}`} target="_blank" rel="noopener noreferrer"
              className={styles.regionButton}>
              <div className={styles.regionNameContainer}>
                <h3>{region}</h3>
                <Icons icon='regionCircle' iconSize="2rem" className={styles.icon}/>

              </div>
            </a>
            
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RegionList;
