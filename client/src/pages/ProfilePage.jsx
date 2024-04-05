import React from 'react'

const ProfilePage = () => {
    return (
        <div>
            <h2 className='profile-username'>Username</h2>
            <table className='score-table'>
                <tr>
                    <th>Category</th>
                    <th>High Score</th>
                </tr>
                <tr>
                    <td>Animals</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Death</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>General</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Law</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Food</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Video Game</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>History</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Sports</td>
                    <td>10</td>
                </tr>
                
            </table>


        </div>
    )
}

export default ProfilePage