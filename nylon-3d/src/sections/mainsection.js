import './mainsection.css';
import mainBack from './img/main.png'
import CallbackForm from '../forms/callbackForm';


function Mainsection() {
    return (
            <section className='section'>    
                    <div className='container mainContainer' style={{ backgroundImage: `url(${mainBack})`}}>
                        <div className='mainSlider'>
                        </div>
                        <div className='mainTitle'>
                            <h1>Студия 3D печати<br/>NYLON</h1>
                            <CallbackForm />
                        </div>
                    </div>
                    
            </section>
    );
  }
  
  export default Mainsection;