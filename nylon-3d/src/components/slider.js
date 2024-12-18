import './mainsection.css';
import mainBack from './img/main.png'
import CallbackForm from '../forms/callbackForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
i

function Mainsection() {
    return (
            <section className='section mainSection' style={{ backgroundImage: `url(${mainBack})`}}>    
                    <div className='container mainContainer' >
                        <div className='mainSlider'>
                            <Swiper
                                direction={'horizontal'}
                                autoplay={{
                                    delay: 250,
                                    disableOnInteraction: false,
                                  }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination, Autoplay]}
                                    className="mySwiper"
                            >
                                <SwiperSlide className='mineSlide'>
                                    <img src=''></img>
                                </SwiperSlide>
                                <SwiperSlide className='mineSlide'>

                                </SwiperSlide>
                                <SwiperSlide className='mineSlide'>

                                </SwiperSlide>
                                <SwiperSlide className='mineSlide'>

                                </SwiperSlide>
                            </Swiper>
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