import React from 'react';
// import { userAuth } from '../../context/actions';
// import { useDispatch } from 'react-redux';

function Profile({profileData}) {
   
    return (
        <div>
            <img src={profileData?.avatar} alt="" />
        </div>
    )
}

export default Profile
