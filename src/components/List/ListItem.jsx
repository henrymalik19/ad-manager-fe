import React, { useState } from 'react'

import './ListItem.css';

function ListItem(props) {

  const [listData, setListData] = useState(props.user);

  return (
    <div className="ListItem" onClick={e => (props.listItemClick(listData))}>
        {props.user.GivenName} {props.user.Surname}
    </div>
  )
}

export default ListItem;
