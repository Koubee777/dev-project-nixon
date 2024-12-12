import './header.css';


function header() {
    return (
      <header>
            <ul className='main_menu'>
                <li>
                    <a href="/.">Главная</a>
                </li>
                <li>
                    <a href="/.">Каталог</a>
                </li>
                <li>
                    <a href="/.">О нас</a>
                </li>
                <li>
                    <a href="/.">Как купить</a>
                </li>
            </ul>
      </header>
    );
  }
  
  export default header;