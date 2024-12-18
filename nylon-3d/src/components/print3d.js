import './print3d.css';
import CallbackForm from '../forms/callbackForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { useState } from 'react';

function Print() { 

        const [istOpen, setIsOpen] = useState(false);
      
        // Функция для переключения состояния меню
        const toggleMenu = () => {
          setIsOpen(!istOpen);
        }
    return (
     <div className = 'container print_container'>
        <div className='print_info'>
            <div className='print_title'>Как заказать 3D печать</div>
            <div className='print_description'>
                <div className='print_minititle'onClick={toggleMenu}>1. Описание услуги</div>
                {istOpen && (
                <ul>
                    <li>Мы предоставляем услуги 3D печати на заказ. Вы можете заказать печать моделей различных размеров и материалов для любых нужд — от прототипов до готовых изделий.</li>
                </ul>
                )}
            </div>
            <div className='print_description'>
                <div className='print_minititle'>2. Если у вас есть 3D модель</div>
                <ul>
                    <li>Модель: Для начала вам потребуется 3D модель, которую нужно распечатать. Она должна быть в одном из поддерживаемых форматов (например, STL, OBJ, 3MF).</li>
                    <li>Материал: Укажите, какой материал вы хотите использовать (PLA, ABS, PETG, TPU и т.д.). Если вы не уверены, мы подберем оптимальный вариант.</li>
                    <li>Размер: Определите размеры объекта. Убедитесь, что модель помещается в рабочее пространство принтера (например, 20x20x20 см).</li>
                </ul>
            </div>
        </div>
        <CallbackForm/>
     </div>
)};
export default Print;