import React from 'react'
import ProfileItem from '../components/ProfileItem'

const ProfilePage = () => {
    return (
        <div>
            <h2 className='profile-username'>Username</h2>
            <table className='score-table'>
                <tr>
                    <th>Category</th>
                    <th>High Score</th>
                </tr>
                <ProfileItem categoryName="Animals" highScore="13" />
                <ProfileItem categoryName="Death" highScore="16" />
                <ProfileItem categoryName="Food" highScore="10" />
                <ProfileItem categoryName="Video Games" highScore="11" />
                <ProfileItem categoryName="General" highScore="11" />
                <ProfileItem categoryName="History" highScore="17" />
                <ProfileItem categoryName="Law" highScore="18" />
                <ProfileItem categoryName="Sports" highScore="19" />
            </table>


        </div>
    )
}

export default ProfilePage