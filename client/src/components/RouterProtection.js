import {useData} from '../context/DataContext'
import {useNavigate } from "react-router-dom";

function RouterProtection({children}){
    const navigate = useNavigate();
    const {getUser} = useData();
    const user = getUser();

    if (user == null){
        navigate('/')
    }

    return (
        <>
            {children}
        </>
    )
}

export default RouterProtection;