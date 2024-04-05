import React from 'react'

const Header = ({ selectedPage, setSelectedPage }) => {
    return (
        <header className='header'>
            <span>TrUe FaLsE or DIEE!!</span>

            <div className={selectedPage === 'gamepage'
                ? 'selected-nav-item'
                : ''}
                onClick={() => setSelectedPage('gamepage')
                }
            >Game</div>

            <div className={selectedPage === 'profilepage'
                ? 'selected-nav-item'
                : ''}
                onClick={() => setSelectedPage('profilepage')
                }
            >Profile</div>

            <div className={selectedPage === 'loginpage'
                ? 'selected-nav-item'
                : ''}
                onClick={() => setSelectedPage('loginpage')
                }
            >Login</div>

        </header>
    )
}


export default Header