import React from 'react';
import './Header.css'
import Logo from '../assests/images/logo.png';
const Header =()=>{
    return (
      <header>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-2'>
                    <img src={Logo} alt='logo' />
                </div>
                <div className='col-sm-5'> 
                  <div className='headerSearch d-flex align-items-center'>
                    <div className='selecrDrop cursor' >
                     All catgories
                    </div>
                    <div className='search'>
                      <input  type='text'/>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </header>
    )
}
export default Header;