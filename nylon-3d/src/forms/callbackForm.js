import styles from './callbackForm.module.css';



function CallbackForm() {
    return (
      <form className={styles.callbackForm}>
        <div style={{color:'#fff'}}>Вы можете написать нам и мы обязательно вам перезвоним!</div>
        <input className={styles.formInput} type="text" placeholder="Ф.И.О"></input>
        <input className={styles.formInput} type="text" placeholder="Телефон"></input>
        {/* <input className={styles.formInput} type="file"></input> */}
        <button className={styles.buttonInput} type='submit'>Связаться с нами</button>
      </form>
    );
  }
  
  export default CallbackForm;