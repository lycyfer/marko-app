"use client"
import './link.css'
import Image from 'next/image'
import rightImg from '../../../resources/Rectangle 73.png'
import emailjs from '@emailjs/browser';
import { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

const SERVICE_ID = "service_hg79zz9"
const TEMPLATE_ID = "template_g9jp5vm"
const YOUR_PUBLIC_KEY = 'DBzoY2Xyn7rTqhg7A'

const Link = () => {
    const [click, setClick] = useState(false);
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
        <div className='link'>
            <div className='container'>

                <h2 className='link_title'>Заказывай прямо сейчас !</h2>
                <form className='link_input' ref={myRef} onSubmit={sendEmail} >
                    <input className='user_name_link' type="text" name="user_name" required placeholder='Ваше имя' />
                    <input className='user_name_link' ype="text" name="user_phone" required placeholder='Ваш номер телефона' />
                    {/* <input type="text" name="user_message" placeholder='message' /> */}
                    <Image
                        alt='Кнопка в парво'
                        src={rightImg}
                    />

                    <button type="submit" value="Send" className='button_about_us_dark'>Связаться с нами</button>
                </form>
                {/* <form className='link_input'>
                        <input type="text" name="name" placeholder='Ваше имя' />
                    </form>
                    <form>
                        <input type="text" name="name" placeholder='Ваш номер телефона' />
                    </form>
                    <Image
                        src={rightImg}
                    />
                    <button className='link_about_us_dark'>Связаться с нами</button> */}


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
    return (

        <form className='link_input' ref={myRef} onSubmit={sendEmail} >
            <input className='user_name_link' type="text" name="user_name" required placeholder='Ваше имя' />
            <input className='user_name_link' ype="text" name="user_phone" required placeholder='Ваш номер телефона' />
            {/* <input type="text" name="user_message" placeholder='message' /> */}
            <Image
                alt='Кнопка в право'
                src={rightImg}
            />

            <button type="submit" value="Send" className='link_about_us_dark'>Связаться с нами</button>
        </form>




    )

}

export default Link