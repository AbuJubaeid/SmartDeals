import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    const { user } = useContext(AuthContext);

    if(!user){
        return <Navigate to="/register"></Navigate>
    }
    return children
};

export default PrivateRoute;