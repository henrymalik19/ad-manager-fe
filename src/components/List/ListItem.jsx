import React, { useState } from 'react'

import './ListItem.css';

function ListItem(props) {

  const [listData, setListData] = useState(props.searchItem);

  return (
    <div className="ListItem" onClick={e => (props.listItemClick(listData))}>
        {props.searchItem.Name}
    </div>
  )
}

export default ListItem;
