'use client'

import './offer.css'
import leftButton from '../../../resources/Rectangle 72.png'
import rightButton from '../../../resources/Rectangle 73.png'
import Image from 'next/image'
import sliderImg from '../../../resources/Rectangle 67.png'
import sliderImg2 from '../../../resources/a0ddb60913c79bbcb54b25aad2835332.png'
import sliderImg3 from '../../../resources/fe26bad850924c9e6f46b296f45af486.jpeg'
import sliderImg4 from '../../../resources/321.jpg'


import tg from '../../../resources/free-icon-telegram-logo-87413.png'
import whatsapp from '../../../resources/free-icon-whatsapp-1384023.png'
import { Slider } from '@/components/slider/slider'

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import miniLogo from '../../../resources/secondPage/Group 32.png'
import { useState, useRef, useEffect } from 'react'

const SERVICE_ID = "service_hg79zz9"
const TEMPLATE_ID = "template_g9jp5vm"
const YOUR_PUBLIC_KEY = 'DBzoY2Xyn7rTqhg7A'
import Swipeable from 'react-swipeable';

const Offer = () => {

    const [click, setClick] = useState(false);
    const [btnActive, setBtnActive] = useState(true)
    const myRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Сообщение отправлено',
                    showConfirmButton: false,
                    timer: 2000
                });
                setClick(false);
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ошибка отправки',
                    text: 'Попробуйте еще раз',
                    confirmButtonText: 'Закрыть'
                });
                props.onClose()
            });
    }

    const kaydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
                setClick(false);
                break;
            default:
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', kaydownHandler);
        return () => document.removeEventListener('keydown', kaydownHandler)
    })

    return (
        <div className="offer">
            <div className='offer_link'>
                <Image
                    className='whatsapp'
                    src={whatsapp}
                    width={25}
                    height={25}
                    alt='WhatsApp' />
                <Image
                    className='tg'
                    src={tg}
                    width={25}
                    height={25}
                    alt='telegram' />

                <div className='border_link'></div>
                <p className='offer_link_p'>Социальные сети</p>
            </div>
            <div className="container">
                {click && (
                    <div className='modal' >
                        <div className='modal__content'  >
                            <div className='modal__header'>
                                <div className='modal__title'>Связаться с нами</div>
                                <button className='modal__close' onClick={() => setClick(false)}>X</button>
                            </div>
                            <form className='modal__form' ref={myRef} onSubmit={sendEmail}>
                                <input className='modal_input_name' type='text' name='name' placeholder='Ваше имя' required />
                                <input className='modal_input_name' type='email' name='email' placeholder='Ваш email' required />
                                <input className='modal_input_name' type='text' name='phone' placeholder='Ваш телефон' required />
                                <textarea className='modal_input_message' name='message' placeholder='Ваше сообщение' required></textarea>
                                <button type="submit" value="Send" className='button_modal' style={{ 'pointer-events': 'visible' }}>Отправить</button>
                            </form>

                        </div>
                    </div>
                )
                }
                <div className='border border_start'></div>
                <h2 className='offer_title'>Что мы можем вам предложить?</h2>
                <div className='main_offer'>
                    <div>
                        <p className='offer_p'>Предлагаем самые оптимальные по срокам и стоимости варианты поставки минеральных удобрений. Удобные и безопасные варианты оплаты. </p>
                        <div>
                            <h3>Наша цель</h3>
                            <p className='offer_p'>Наша цель - помочь фермерам повысить объемы качества урожая. Обеспечиваем сельское хозяйство новыми инновационными удобрениями, необходимыми для увеличения урожайности и качества сельхозкультур.</p>
                        </div>
                        <h3>Наше предложение</h3>
                        <p className='offer_p'>Мы предоставляем высококачественные азотные, фосфорные,калийные и комплексные удобрения.
                            Работа с нами - гарантия надёжного и взаимовыгодного сотрудничества!!!</p>
                    </div>
                    <div className='anime'>
                        <button className='link_about_us_dark' onClick={() => setClick(true)}>Связаться с нами</button>

                        {/* createSlider */}
                        {/* <div className='slider'>
                            <div className='slider_str'>
                                <Image src={leftButton} />
                                <div className='slider_index'>
                                    <span>01</span>/04
                                </div>
                                <Image src={rightButton} />
                            </div>
                            <div>
                                <Image
                                    src={sliderImg}
                                />
                            </div>
                        </div> */}
                        <Slider>
                            <div className='itemm item-1'>
                                <Image src={sliderImg} alt='Удобрение' />
                            </div>
                            <div className='itemm item-2'>
                                <Image src={sliderImg2}
                                    width={600}
                                    height={350} alt='Удобрение' />
                            </div>
                            <div className='itemm item-3'>
                                <Image src={sliderImg3}
                                    width={600}
                                    height={350} alt='Удобрение' />
                            </div>
                            <div className='itemm item-4'>
                                <Image src={sliderImg4}
                                    width={600}
                                    height={350} alt='Удобрение' />
                            </div>
                        </Slider>
                        {/* <div>
                            <div className='main-container'>
                                <Image src={leftButton} />
                                <div className='slider_index'>
                                    <span>01</span>/04
                                </div>
                                <Image src={rightButton} />
                            </div>
                            <div className='dots'>
                                <button></button>
                                <button></button>
                                <button></button>
                                <button></button>
                            </div>
                        </div> */}

                    </div>
                </div>
                <div className='border border_end'></div>
            </div>
        </div>
    )
}

const View = (props) => {
    // const SERVICE_ID = "service_hg79zz9"
    const SERVICE_ID = "service_hg79zz9"
    // const TEMPLATE_ID = "template_g9jp5vm"
    const TEMPLATE_ID = "template_g9jp5vm"
    const YOUR_PUBLIC_KEY = 'DBzoY2Xyn7rTqhg7A'
    const myRef = useRef();

    const kaydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
                props.onClose();
                break;
            default:
        }
    }
    useEffect(() => {
        cloceForm();
        // hidenForm();
    })

    const cloceForm = () => {
        document.addEventListener('keydown', kaydownHandler);
        return () => document.removeEventListener('keydown', kaydownHandler)
    }

    const hidenForm = () => {
        const onClick = e => myRef.current.contains(e.target) || props.onClose();
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text)
                console.log('message send')
                Swal.fire({
                    title: "Спасибо",
                    text: "Сообщение отправленно.",
                    type: "success",
                })
                props.onClose()
            }, (error) => {
                console.log(error.text);
                console.log('message erro')
                Swal.fire({
                    title: "Oops...",
                    text: "Что-то пошло не так!.",
                    type: "error",
                })
            });
        e.target.reset()
    }
    return !props.isVisble ? null : (
        <div className='modal'>
            <div className='header_form'>

                <form className='link_input_header' ref={myRef} onSubmit={sendEmail} >
                    <div className='border_link_modal'>
                        <div className='border_modal'></div>
                        <Image
                            className='mini_logo_modal'
                            src={miniLogo}
                            alt='МАР-КО'
                        />
                        <div className='border_modal'></div>
                    </div>

                    <input className="user_name" type="text" name="user_name" required placeholder='Имя…' />


                    <input className="user_phone" type="text" name="user_phone" required placeholder='Телефон…' />

                    <textarea type="text" label='Сообщение'
                        name='user_message'
                        placeholder='Сообщение…'
                        required />
                    <button type="submit" value="Send" className='link_about_us_dark button_modal' style={{ 'pointer-events': 'visible' }}>Отправить</button>
                </form>


            </div>
        </div>

    )

}

export default Offer