import React from 'react'

const ProfileItem = ({ categoryName, highScore }) => {
    return (
        <tr className='profile-table-item'>
            <td>{categoryName}</td>
            <td>{highScore}</td>
        </tr>
    )
}

export default ProfileItem