"use client"
import './secondHeader.css'
import Image from 'next/image'
import secondHeaderImg from '../../../resources/secondPage/PLANT-GROWING 1.png'
import secondHeaderLogo from '../../../resources/123.png'
import Link from 'next/link'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useState, useRef, useEffect } from 'react'
import miniLogo from '../../../resources/secondPage/Group 32.png'
import { Test } from '@/components/testOffer/testOffer'
import { usePathname, asPath } from 'next/navigation'

const SERVICE_ID = "service_hg79zz9"
const TEMPLATE_ID = "template_g9jp5vm"
const YOUR_PUBLIC_KEY = 'DBzoY2Xyn7rTqhg7A'

const SecondHeader = () => {
    const [click, setClick] = useState(false);
    const [btnActive, setBtnActive] = useState(true)
    const myRef = useRef();
    const pathname = usePathname();
    // const id = parseInt(pathname.match(/\/(\d+)$/)[1]);
    const changeBtnActive = () => {
        if (pathname === '/assortmen') {
            setBtnActive(true)
        } else if (pathname === `/assortme/`) {
            setBtnActive(false)
        }

    }
    useEffect(() => {
        // if (pathname === '/assortment') {
        //     setBtnActive(true)
        // } else if (pathname === `/assortment/1`) {
        //     setBtnActive(false)
        // }
    })

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
        <div className="secondHeader">
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
                            <button type="submit" value="Send" className=' button_modal' style={{ 'pointer-events': 'visible' }}>Отправить</button>
                        </form>

                    </div>
                </div>
            )
            }
            <Image className='second_header_img'
                src={secondHeaderImg}
                alt='Удобрение'
            />
            <div className='container'>
                {/* <View isVisble={click} onClose={() => setClick(false)} setClick={() => setClick(false)} /> */}
                <nav>
                    <div className='second_header_nav_bar'>
                        <div className='second_header_logo'>
                            <Image
                                src={secondHeaderLogo}
                                className='second_header_logo_img'
                                alt='МАР-КО'
                            />
                            <p className='second_header_subtitle'>МАР-КО</p>

                        </div>
                        <div className='nav_bar'>
                            <Link href='/' className={btnActive ? 'second_about_us' : 'second_about_us'}>о нас</Link>
                            <Link href='/assortment' onClick={changeBtnActive} className={btnActive ? 'second_assortment second_assortment-light' : 'second_assortment second_assortment-light'}>Ассортимент</Link>

                        </div>
                    </div>
                    <button className='second_link_about_us' onClick={() => setClick(true)}>Связаться с нами</button>
                </nav>
                <h1>Ассортимент компаниии <span className='h1_span'>Мар-ко!</span></h1>
                <p className='subtitle'>Мы предоставляем высококачественные азотные, фосфорные,калийные и комплексные удобрения.
                </p>
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
                            alt='МАР-КО'
                            className='mini_logo_modal'
                            src={miniLogo}
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

export default SecondHeader