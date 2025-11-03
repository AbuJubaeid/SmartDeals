import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const RootLaayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLaayout;