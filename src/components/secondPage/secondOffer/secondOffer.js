"use client"

// import './secondOffer.css'
// import Image from 'next/image'
// import miniLogo from '../../../resources/secondPage/Group 32.png'
// import { Component } from 'react'
// import Link from 'next/link'
// // import data from '@/components/data/data'


// class SecondOffer extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             buttonsData: [
//                 { name: 'all', lable: 'Все' },
//                 { name: 'nitrogen', lable: 'Азотное' },
//                 { name: 'phosphorus', lable: 'Фосфорное' },
//                 { name: 'complex', lable: 'Комплексное' },
//                 { name: 'potassium', lable: 'Калийное' }
//             ],
//             term: '',
//             id: 0
//         }
//     }
//     onUpdateSearch = (e) => {
//         const term = e;
//         this.setState({
//             term: term
//         })
//         this.props.onUpdateSearch(term)
//     }
//     render() {
//         // const { data } = this.props;
//         // console.log(this.props.data)
//         const { buttonsData } = this.state;
//         const btns = buttonsData.map(({ name, lable }) => {
//             const active = this.props.filter === name;
//             const clazz = active ? 'secondOffer_button-light secondOffer_button' : 'secondOffer_button'
//             return (
//                 <button className={clazz} onClick={() => this.props.onFilterSelect(name)}>{lable}</button>
//             )
//         })

//         const list = this.props.data.map(item => {
//             return (

//                 <Link href={`/assortment/${item.id}`} className='secondOffer_list_item' onClick={(e) => this.props.deleteItem(item.id, e.preventDefault)}>
//                     <Image
//                         className='item_img'
//                         src={item.img}
//                         width={152}
//                         height={300}
//                     />
//                     <div className='item_text_block'>
//                         <p className='item_offer_name'>{item.name}</p>
//                         <p className='item_second_name'>{item.secondName}</p>
//                         <p className='item_descr'>{item.miniDescr}</p>
//                     </div>
//                 </Link>

//             )
//         })

//         return (
//             <div className='secondOffer'>
//                 <div className='container'>
//                     <div className='border_link_offer'>
//                         <div className='border_offer'></div>
//                         <Image
//                             className='mini_logo_offer'
//                             src={miniLogo}
//                         />
//                         <div className='border_offer'></div>
//                     </div>
//                     <div className='filter'>
//                         <div className='secondOffer_input'>
//                             <div className='secondOffer_lable'>Поиск</div>
//                             <input onChange={e => this.onUpdateSearch(e)} className='change_input' type='text' placeholder='Напиши здесь...' aria-label='Напиши здесь...' />

//                         </div>
//                         <div className='secondOffer_filter'>
//                             <div className='secondOffer_label'>Фильтр</div>
//                             {btns}
//                         </div>
//                     </div>
//                     <div className='secondOffer_list'>
//                         {list}
//                     </div>
//                 </div>
//             </div>
//         )
//     }

// }

// export default SecondOffer


import './secondOffer.css';
import Image from 'next/image';
import miniLogo from '../../../resources/secondPage/Group 32.png';
import { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

const SecondOffer = (props) => {
    const [buttonsData] = useState([
        { name: 'all', lable: 'Все' },
        { name: 'nitrogen', lable: 'Азотное' },
        { name: 'phosphorus', lable: 'Фосфорное' },
        { name: 'complex', lable: 'Комплексное' },
        { name: 'potassium', lable: 'Калийное' }
    ]);
    const [term, setTerm] = useState('');
    const onUpdateSearch = (e) => {
        const term = e.target.value;
        setTerm(term);
        props.onUpdateSearch(term);
    };
    const [showMore, setShowMore] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(4)
    // const itemsToShow = showMore ? props.data.length : 4;
    const handleShowMore = () => {
        setShowMore(true);
    };

    const btns = buttonsData.map(({ name, lable }) => {
        const active = props.filter === name;
        const clazz = active ? 'secondOffer_button-light secondOffer_button' : 'secondOffer_button';
        return (
            <button key={name} className={clazz} onClick={() => props.onFilterSelect(name)}>
                {lable}
            </button>
        );
    });
    console.log(props.data.length)


    const list = props.data.slice(0, itemsToShow).map((item) => (
        <Link
            key={item.id}
            href={`/assortment/${encodeURIComponent(item.id)}`}
            className="secondOffer_list_item"
        >
            <div className='item_offer_img'>
                <Image className="" src={item.img} alt={item.alt} />
            </div>
            <div className="item_text_block">
                <p className="item_offer_name">{item.name}</p>
                <p className="item_second_name">{item.secondName}</p>
                <p className="item_descr">{item.miniDescr}</p>
            </div>
        </Link>
    ));


    return (
        <div className="secondOffer">
            <div className="container">
                <div className="border_link_offer">
                    <div className="border_offer"></div>
                    <Image className="mini_logo_offer" src={miniLogo} alt='МАР-КО' />
                    <div className="border_offer"></div>
                </div>
                <div className="filter">
                    <div className="secondOffer_input">
                        <div className="secondOffer_lable">Поиск</div>
                        <form onSubmit={onUpdateSearch}>
                            <input
                                onChange={onUpdateSearch}
                                className="change_input"
                                type="text"
                                placeholder="Напиши здесь..."
                                aria-label="Напиши здесь..."
                                value={props.term}
                            />
                        </form>
                    </div>
                    <div className="secondOffer_filter">
                        <div className="secondOffer_label">Фильтр</div>
                        {btns}
                    </div>
                </div>
                <div className="secondOffer_list">{list}</div>

                {itemsToShow < props.data.length && (
                    <button className='showMore' onClick={() => setItemsToShow(itemsToShow + 4)}>
                        Показать еще
                    </button>
                )}
                {/* {itemsToShow >= props.data.length && (
                    <div className="noMoreItems">Больше нет элементов</div>
                )} */}
            </div>
        </div>
    );
};

export default SecondOffer;