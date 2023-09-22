import './ThreedOffer.css'
import Image from 'next/image'
import miniLogo from '../../../resources/secondPage/Group 32.png'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useState, useRef, useEffect } from 'react'
import leaves from '../../../resources/coca-leaves.png'
import corn from '../../../resources/free-icon-corn-2662027.png'
import leavesSecond from '../../../resources/icons8-лист-48.png'


import { usePathname, asPath } from 'next/navigation'

const SERVICE_ID = "service_hg79zz9"
const TEMPLATE_ID = "template_g9jp5vm"
const YOUR_PUBLIC_KEY = 'DBzoY2Xyn7rTqhg7A'

const ThreedOffer = (props) => {
    const [click, setClick] = useState(false);
    const [term, setTerm] = useState('');
    const [testData, setTestData] = useState([{}])
    const myRef = useRef()
    const pathname = usePathname();
    console.log(pathname)
    const id = parseInt(pathname.match(/\/(\d+)$/)[1]);
    console.log(id);

    const onUpdateSearch = (e) => {
        const term = e.target.value;
        setTerm(term);
        props.onUpdateSearch(term);
    }
    // const deleteItem = (id) => {
    //     setTestData(props.data.filter(item => item.id === id))
    // }
    // console.log(testData)
    console.log(props.id)
    const item = props.data.filter(item => item.id === id);
    console.log(item)
    // deleteItem(props.id)
    // console.log(props.id)
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

    // const hidenForm = () => {
    //     const onClick = e => myRef.current.contains(e.target) || setClick(false);
    //     document.addEventListener('click', onClick);
    //     return () => document.removeEventListener('click', onClick);
    // }

    // useEffect(hidenForm, []);

    const advantages = props.advantages.map(item => {
        return (
            <div className='product_detals_advantages_list' key={item}>
                <Image
                    src={leaves}
                    width={45}
                    height={45}
                    alt='лист' />
                <p className='product_detals_advantages_desc'>{item}</p>
            </div>
        )
    })
    const cultures = props.cultures.map(item => {
        return (

            <div className='product_detals_cultures_list' key={item}>
                <Image
                    key='1'
                    width={45}
                    height={45}
                    src={leavesSecond}
                    alt='Лист' />
                <p className='product_detals_cultures_desc'>{item}</p>
            </div>

        )
    })
    // console.log(advantages)
    const elem = item.map(item => {
        console.log(item)
        return (
            <div className="ThreedOfferItem__item" key={item.id}>
                <div>
                    <Image
                        className='item_img'
                        src={item.img}
                        alt={item.alt}
                    />
                </div>
                <div className='ThreedOfferItem__item__modul'>
                    <div className='ThreedOfferItem__Type'>{item.mainName}</div>
                    <div className='ThreedOfferItem__text'>{item.descr}</div>
                    <button className='offer_about_us_dark' onClick={() => setClick(true)}>Связаться с нами</button>
                </div>
            </div>
        )
    })

    return (
        <div className="ThreedOffer">
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
            {/* <div className='border'></div> */}
            <div className='ThreedOfferItem__item__title'>Об этом товаре</div>
            <div className='border_block'>
                <div className='border_modal_offer'></div>
                <Image
                    className='mini_logo_modal_three'
                    src={miniLogo}
                    alt='МАР-КО'
                />
                <div className='border_modal_offer'></div>
            </div>
            {elem}
            <div className='block_product_detals'>
                <div className='product_detals_advantages'>
                    <div>
                        <p className='product_deatals_title'>Преимущества</p>
                        <div className='flex_test'>
                            {advantages}
                        </div>
                    </div>
                    <div className='test_flex'>
                        <p className='product_deatals_title'>Подходит для культур</p>
                        <div className='product_detals_cultures'>{cultures}</div>
                    </div>
                </div>
                {/* <div>
                    <p className='product_deatals_title'>Применение</p>
                    {advantages}
                </div> */}
            </div>
            {/* <div className='border'></div> */}


        </div >
    )
}

export default ThreedOffer;