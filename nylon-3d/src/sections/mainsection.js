import './mainsection.css';
import bcgr from '../img/main.png';


function mainSection() {
    return (
        <section className='section'>
            <div className='container main_container'>
            <img src={bcgr} alt='img' className='main_bc'></img>
            </div>
        </section>
    );
  }
  
  export default mainSection;