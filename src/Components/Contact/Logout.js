import React from 'react';
import { useDispatch } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { useSelector} from "react-redux";
import "./Logout.css";

const Logout = () => {
const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
    };

  return (
    <div className='logout'>
        <h1>Merci pour vos informations <span className='user__name'>{user.name}</span></h1>
        <button className='logout__button' onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout