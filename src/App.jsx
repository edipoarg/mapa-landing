import RegionList from './components.jsx/RegionList/RegionList';
import './App.css';
import LogoMapa from './components.jsx/logoMapa/LogoMapa';

const App = () => {
  return (
    <>
      <section className="regionListContainer">
        <section className="regionListHeader">
        <h3 className='deco'>////////////////////</h3>
        <LogoMapa/>
        </section>
        <RegionList />
        <section className='sloganContainer'>
        <h5 className='slogan'>RED DE CUIDADOS CIUDADANOS CONTRA LA VIOLENCIA POLICIAL</h5>
      </section>
      <div className='thinLine'/>
        </section>
   

    </>
  );};
export default App;
