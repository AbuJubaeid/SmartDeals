import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const RootLaayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLaayout;