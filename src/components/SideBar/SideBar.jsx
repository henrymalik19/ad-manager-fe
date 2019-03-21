import React from 'react'

import './SideBar.css';

function SideBar() {

  const handleClick = (e) => {
    // e.preventDefault();
    e.currentTarget.className = 'selected';
    console.log(e.currentTarget);
  }

  return (
    <div className="SideBar">
        <ul className="SideBar-Nav">
            <li onClick={handleClick}><a href='/users'>Users</a></li>
            <li onClick={handleClick}><a href='/groups'>Groups</a></li>
            <li onClick={handleClick}><a href='/computers'>Computers</a></li>
        </ul>
    </div>
  )
}

export default SideBar;
