import React from 'react'

import './ListItem.css';

function ListItem(props) {

  return (
    <div className="ListItem" onClick={e => (props.listItemClick(props.searchItem))}>
        <p className="ListItem-Prop">{props.searchItem.givenName} {props.searchItem.sn}</p>
        <p className="ListItem-Prop">{props.searchItem.title ? props.searchItem.title : 'N/A'}</p>
        <p className="ListItem-Prop">{props.searchItem.department ? props.searchItem.department : 'N/A'}</p>
        <p className="ListItem-Prop">{props.searchItem.co ? props.searchItem.co : 'N/A'}</p>
    </div>
  )
}

export default ListItem;
