import { getUserProfile } from '@/services/User';
import React from 'react';

const Profile =async () => {
    const userProfile =await getUserProfile()
    const{address} = userProfile?.data
    console.log(address,"addresssssss")

    // console.log(userProfile,"userProfile")
    // console.log(userProfile.data.address)
    return (
        <div>
            profile
            <input value={address} type="text" name='name' />

        </div>
    );
};

export default Profile;