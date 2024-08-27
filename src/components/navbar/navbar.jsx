import React, { useState } from 'react';
import './navbar.css';
import quill from '../../assets/quill.png';

function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  return (
    <>
      <div className='navbar'>
        <div className='navbar-left'>
          <img src={quill} alt='Quill' />
          <p>Poetry Haven</p>
        </div>

        <div className='navbar-right'>
          <a href='#searchpoet'><p>SearchPoet</p></a>
          <a href='#' onClick={openCreateModal}><p>Create</p></a>
          <a href='#' onClick={openLoginModal}><p>Login</p></a>
          <a href='#subscribe'><p>Subscribe</p></a>
        </div>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={closeLoginModal}>&times;</span>
            <h2>Login</h2>
            {/* Add login form here */}
            <form>
              <input type='email' placeholder='Email' />
              <input type='password' placeholder='Password' />
              <button type='submit'>Login</button>
            </form>
          </div>
        </div>
      )}

      {/* Create Modal */}
      {isCreateModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={closeCreateModal}>&times;</span>
            <h2>Create</h2>
            {/* Add creation form here */}
            <form>
              <input type='email' placeholder='Email' />
              <input type='password' placeholder='Password'></input>
              <button type='submit'>Create</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
