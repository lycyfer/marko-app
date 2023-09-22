import './footer.css'
import Image from 'next/image'
import tg from '../../../resources/free-icon-telegram-logo-87413.png'
import ws from '../../../resources/free-icon-whatsapp-1384023.png'
import footerLogo from '../../../resources/123.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer_link'>
                <h3 className='footer_title_link'>Наши социальные сети</h3>
                <div className='tg_flex'>
                    {/* <div className='tg_block'>Telegram</div> */}
                    <div className='frame'>
                        <button class="custom-btn btn-5 tg_block"><span className='span_telegram'>Telegram</span></button>
                    </div>
                    <div className='tg_footer'>
                        {/* <Image
                            className='tgg'
                            src={tg}
                            width={25}
                            height={25}
                        /> */}
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" className="tgg" height="25px"><path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" /></svg>
                        </a>
                    </div>
                </div>
                <div className='tg_flex ws_block'>
                    {/* <div className='tg_block'>Whatsapp</div> */}
                    <div className='frame'>
                        <button class="custom-btn btn-5-tg tg_block"><span className='span_telegram'>Whatsapp</span></button>
                    </div>
                    <div className='tg_footer_ws'>
                        {/* <Image
                            className='tgg'
                            src={ws}
                            width={25}
                            height={25}
                        /> */}
                        <a href=""><svg className='ws' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z" /></svg></a>

                    </div>

                </div>
            </div>
            <div className='footer_logo'>
                <Image
                    src={footerLogo}
                    className='footer_logo_img'
                    width={100}
                    height={100}
                    alt='МАР-КО'

                />
                <p className='footer_subtitle'>МАР-КО</p>

            </div>
            <div className='footer_second_title'>
                <h3 className='footer_second_title_link'>Или позваните нам</h3>
                <div className='footer_phone'>+380678341034</div>
                <div className='footer_phone'>+380678341034</div>
            </div>
        </div>
    )
}

export default Footer