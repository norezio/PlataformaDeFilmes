import React from 'react';
import './Header.css';


export default ({black}) => {

    return(
        <header className={black ? 'black' : ''}>
           <div className='header--logo'>
                <a hred='/'>
                    <img  src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png' alt='logo'/>
                </a>
           </div>
           <div className='header--user'>
                <a hred='/'>
                    <img  src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Usúario'/>
                </a>
           </div>
        </header>
    )

}