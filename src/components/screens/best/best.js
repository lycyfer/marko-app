import './best.css'
import Image from 'next/image'
import Link from 'next/link'

const Best = ({ data }) => {
    const elem = data.map(item => {
        if (item.best === true) {
            return (
                <Link
                    key={item.id}
                    href={`/assortment/${item.id}`}
                    className="best_list_item"
                    onClick={(e) => {
                        props.deleteItem(item.id);
                        e.preventDefault();
                    }}
                >
                    <Image className="item_best_img" src={item.img} width={220} height={230} alt={item.alt} />
                    <div className="item_best_block">
                        <p className="item_best_name">{item.name}</p>
                        <p className="item_best_second_name">{item.secondName}</p>
                        <p className="item_best_desc">{item.miniDescr}</p>
                    </div>
                </Link>
            )
        }
    })






    return (
        <div className="best">
            <div className='container'>
                <h2 className='best_title'>The Best</h2>
                <div className='best_list'>{elem}</div>
            </div>
        </div>
    )
}

export default Best