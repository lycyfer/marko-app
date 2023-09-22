import Best from "./best/best"
// import Header from "./header/header"
import Offer from '@/components/screens/offer/offer'
import Link from '@/components/screens/link/link'
import Footer from '@/components/screens/footer/footer'
import Header from "./header/header"

const First = ({ data }) => {
    return (
        <div>
            <Header />
            <Offer />
            <Best data={data} />
            <Link />
            <Footer />
        </div>
    )

}
export default First