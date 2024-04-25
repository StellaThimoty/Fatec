import Navbar from './Navbar.Component'
import Footer from './Footer.Component'

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <>
        <div className="container">
            <Navbar/>
            <div className="main">
            {children}            
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Layout