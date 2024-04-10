import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Nav/Navbar';
import Footer from '../components/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-95px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Main;