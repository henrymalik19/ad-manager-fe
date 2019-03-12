import React from 'react'

import './Profile.css';

function Profile(props) {
  return (
    <div className="Profile">
    {console.log(props.detailData)}
      <h2 className="Profile-Name">{props.detailData.givenName} {props.detailData.sn}</h2>
      <ul className="Profile-Info">
        <li>
          <span className="Profile-Info-Title">Department:</span> {props.detailData.department}
        </li>
        <li>
          <span className="Profile-Info-Title">Job Title:</span> {props.detailData.title}
        </li>
        <li>
          <span className="Profile-Info-Title">Manager:</span> {props.detailData.manager}
        </li>
        <li>
          <span className="Profile-Info-Title">Email:</span> {props.detailData.mail}
        </li>
        <li>
          <span className="Profile-Info-Title">Groups:</span> <ol>{props.detailData.memberOf.map( group => <li>{group.split(',')[0].split('=')[1]}</li> )}</ol>
        </li>
      </ul>
    </div>
  )
}

export default Profile;
