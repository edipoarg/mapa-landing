import styles from './RegionList.module.css';
import Icons from "../Icons/Icons";

const RegionList = () => {
  const regions = [
    { name: 'CABA', link: 'caba' },
    { name: 'LA PLATA', link: 'la-plata' },
    { name: 'ROSARIO', link: 'rosario' }
  ];

  const regionLinks = {
    'caba': 'https://www.mapadelapolicia.com/caba',
    'la-plata': 'https://www.mapadelapolicia.com/la-plata',
    'rosario': 'https://www.mapadelapolicia.com/rosario'
  };

  return (
    <section className={styles.regionListContainer}>
      <ul className={styles.regionList}>
        {regions.map((region, index) => (
          <li key={index} className={styles.regionContainer}>
            <a href={regionLinks[region.link]} target="_blank" rel="noopener noreferrer" className={styles.regionButton}>
              <div className={styles.regionNameContainer}>
                <h3>{region.name}</h3>
                <Icons icon='regionCircle' iconSize="2rem" className={styles.icon}/>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <h3 className={styles.decoXl}>/////</h3>
    </section>
  );
};

export default RegionList;
