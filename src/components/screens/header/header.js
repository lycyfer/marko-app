"use client"
import './header.css'
// import 'semantic-ui-css/semantic.min.css'
import Image from 'next/image'
import ExportedImage from "next-image-export-optimizer";
import headerImg from '../../../resources/flower.png'
import headelogo from '../../../resources/123.png'
import miniLogo from '../../../resources/secondPage/Group 32.png'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { usePathname, asPath } from 'next/navigation'
// import emailjs from 'emailjs-com'
// import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
// import { Form, Input, TextArea, Button } from 'semantic-ui-react';
const SERVICE_ID = "service_hg79zz9"
const TEMPLATE_ID = "template_g9jp5vm"
const YOUR_PUBLIC_KEY = 'DBzoY2Xyn7rTqhg7A'

const Header = () => {
    const [click, setClick] = useState(false);
    const [btnActive, setBtnActive] = useState(true)
    const myRef = useRef();
    const pathname = usePathname();
    console.log(pathname)
    const changeBtnActive = () => {
        if (pathname === '/') {
            setBtnActive(true)
        } else {
            setBtnActive(false)
        }

    }
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
        <div className='header'>
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
                            <button type="submit" value="Send" className='link_about_us_dark button_modal' style={{ 'pointer-events': 'visible' }}>Отправить</button>
                        </form>

                    </div>
                </div>
            )
            }
            <Image className='header_img'
                src={headerImg}
                alt='Удобрние'
            />
            <div className='container'>

                <nav>
                    <div className='header_nav_bar'>
                        <div className='header_logo'>
                            <Image
                                src={headelogo}
                                className='header_logo_img'
                                alt='МАР-КО'

                            />
                            <p className='header_subtitle'>МАР-КО</p>

                        </div>
                        <div className='nav_bar'>
                            <Link href='/' onClick={changeBtnActive} className={btnActive ? 'about_us about_us-light' : 'about_us'}>о нас</Link>
                            <Link href='/assortment' className={btnActive ? 'assortment' : 'assortment-light assortment'}>Ассортимент</Link>
                        </div>

                    </div>
                    <button className='link_about_us' onClick={() => setClick(true)}>Связаться с нами</button>





                </nav>
                <h1>Компания <span className='h1_span'>Мар-ко!</span></h1>
                <p className='subtitle'>Предлагаем самые оптимальные по срокам и стоимости варианты поставки минеральных удобрений.</p>
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


export default Header




// <Form onSubmit={sendEmail}>
//     <Form.Field
//         id='form-input-control-last-name'
//         control={Input}
//         label='Имя'
//         name='user_name'
//         placeholder='Имя…'
//         required
//         icon='user circle'
//         iconPosition='left'
//     />
//     <Form.Field
//         id='form-input-control-email'
//         control={Input}
//         label='Телефон'
//         name='user_phone'
//         placeholder='Телефон…'
//         required
//         icon='phone volume'
//         iconPosition='left'
//     />
//     <Form.Field
//         id='form-textarea-control-opinion'
//         control={TextArea}
//         label='Сообщение'
//         name='user_message'
//         placeholder='Сообщение…'
//         required
//     />
//     <Button type='submit' color='blue' style={{ 'pointer-events': 'visible' }}>Отправить</Button>
// </Form>