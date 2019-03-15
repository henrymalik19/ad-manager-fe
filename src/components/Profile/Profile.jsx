import React from 'react'

import './Profile.css';

function Profile(props) {

  if(props.listType === 'users') {
    return (
      <div className="Profile">
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
            {console.log(typeof props.detailData.memberOf)}
            <span className="Profile-Info-Title">Groups:</span> <ol>{typeof props.detailData.memberOf === 'object' ? props.detailData.memberOf.map( group => <li>{group.split(',')[0].split('=')[1]}</li> ) : '' }</ol>
          </li>
        </ul>
      </div>
    )
  } else if(props.listType === 'groups') {
    return (
      <div className="Profile">
        <h2 className="Profile-Name">{props.detailData.name}</h2>
        <ul className="Profile-Info">
          <li>
            <span className="Profile-Info-Title">Description:</span> {props.detailData.description}
          </li>
          <li>
            <span className="Profile-Info-Title">Members:</span> <ol>{props.detailData.memberOf ? props.detailData.member.map( group => <li>{group.split(',')[0].split('=')[1]}</li> ) : '' }</ol>
          </li>
        </ul>
      </div>
    )
  } else if(props.listType === 'computers') {
    return (
      <div className="Profile">
      {console.log(props.detailData)}
        <h2 className="Profile-Name">{props.detailData.dNSHostName}</h2>
        <ul className="Profile-Info">
          <li>
            <span className="Profile-Info-Title">Description:</span> {props.detailData.description ? props.detailData.description : 'N/A'}
          </li>
          <li>
            <span className="Profile-Info-Title">Operating System:</span> {props.detailData.operatingSystem ? props.detailData.operatingSystem : 'N/A'}
          </li>
        </ul>
      </div>
    )
  }
}

export default Profile;
