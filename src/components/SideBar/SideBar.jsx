import React from 'react'

import './SideBar.css';

function SideBar() {
  return (
    <div className="SideBar">
        <ul>
            <li><a href='/users'>Users</a></li>
            <li><a href='/groups'>Groups</a></li>
            <li><a href='/computers'>Computers</a></li>
        </ul>
    </div>
  )
}

export default SideBar;
