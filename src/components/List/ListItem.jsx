import React, { useState } from 'react'

import './ListItem.css';

function ListItem(props) {

  const [listData, setListData] = useState(props.searchItem);

  return (
    <div className="ListItem" onClick={e => (props.listItemClick(listData))}>
        <h3>{props.searchItem.name}</h3>
        <p>Department: {props.searchItem.department ? props.searchItem.department : 'N/A'}</p>
    </div>
  )
}

export default ListItem;
