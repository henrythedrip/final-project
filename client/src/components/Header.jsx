import React from 'react'

const Header = ({ selectedPage, setSelectedPage }) => {
    return (
        <header>
            <span>TrUe FaLsE or DIEE!!</span>

            <div className={selectedPage === 'gamepage'
                ? 'selected-nav-item'
                : ''}
                onClick={() => setSelectedPage('gamepage')
                }
            >Game</div>

            <div className={selectedPage === 'profile'
                ? 'selected-nav-item'
                : ''}
                onClick={() => setSelectedPage('profile')
                }
            >Profile</div>

            <div className={selectedPage === 'login'
                ? 'selected-nav-item'
                : ''}
                onClick={() => setSelectedPage('login')
                }
            >Login</div>

        </header>
    )
}

export default Header