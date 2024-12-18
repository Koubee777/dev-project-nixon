import './header.css';
import { useState } from 'react';
function Header() {
    const [isOpen, setOpen] = useState();
    return (
      <header>
         <div className='container'>
            <button className={`button_menu ${isOpen ? "active_button" : ""}`} onClick={() => setOpen(!isOpen)}><div></div><div></div><div></div></button>
            <ul className={`main_menu ${isOpen ? "active_menu" : ""}`} >
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
        </div>
      </header>
      
    );
  }
  export default Header;