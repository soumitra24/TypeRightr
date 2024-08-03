import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function AccountIcon() {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const handleUserPages = () =>{
        if(user){
            navigate('/typingtest/user')
        }
        else{
            navigate("/typingtest/SignUp");
        }
    }
    return(
        <>
            <div className="accicon">
                    <AccountCircleIcon sx={{ fontSize: 40 }} onClick={handleUserPages}/>
            </div>
        </>
    )
}   