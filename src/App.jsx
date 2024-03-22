import RegionList from './components.jsx/RegionList/RegionList';
import './App.css';
import LogoMapa from './components.jsx/logoMapa/LogoMapa';
import Logos from './components.jsx/logos/Logos';

const listaDeLogos = [
  { image: 'cels.png', link: 'https://violenciapolicial.org.ar/' },
  { image: 'crisis.png', link: 'https://revistacrisis.com.ar/' },
  { image: 'correpi.png', link: 'https://www.correpi.org/' },
  { image: 'mte.png', link: 'https://mteargentina.org.ar/' },
  { image: 'nuestraAmerica.png', link: 'enlace2' },  
  { image: 'puntoDeFuga.png', link: 'enlace2' },



];


const App = () => {
  return (
    <>
      <section className="landingContainer">
        <section className="regionListHeader">
        <h3 className='deco'>////////////////////</h3>
        <LogoMapa/>
        </section>
        <RegionList className='regionListContainer'/>
        <section className='sloganContainer'>
        <h5 className='slogan'>RED DE CUIDADOS CIUDADANOS CONTRA LA VIOLENCIA POLICIAL</h5>
      </section>

      <Logos logos={listaDeLogos}/>
      <div className='thinLine'/>
      <div className='develop'> <h4>DESAROLLADA X EDIPO</h4></div>
        </section>
   

    </>
  );};
export default App;
