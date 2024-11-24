import styles from './callbackForm.module.css';
import { useState } from 'react';
import { useDebugValue } from 'react';


function CallbackForm() {

  
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount((currentValue) => currentValue + 1);
      
    }
    
    useDebugValue({increment}>10? 'LOH' : 'NELOH');


     

    return (
      <form action="" className={styles.callbackForm}>
        <div style={{color:'#fff'}}>Вы можете написать нам и мы обязательно вам перезвоним!</div>
        <input className={styles.formInput} type="text" placeholder="Ф.И.О"></input>
        <input className={styles.formInput} type="tel" placeholder="Телефон"></input>
        <input className={styles.formInput} type="file"></input>
        <div className={styles.buttonInput} onClick={increment}>Количество штук: {count}</div>
        <button className={styles.buttonInput} type='submit'>Расчитать печать</button>
        
      </form>
    );
  }
  
  export default CallbackForm;