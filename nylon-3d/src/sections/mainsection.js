import './mainsection.css';


function Mainsection() {
    return (
        <>
            <section className='section'>
                <div className='container main_container'>
                    
                    <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/main.png'})`}}></div>
                </div>
            </section>
        </>
    );
  }
  
  export default Mainsection;