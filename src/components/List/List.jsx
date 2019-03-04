import React from 'react'

import './List.css';

//Import Components
import Listitem from './ListItem';

function List(props) {
  return (
    <div className="List">
        {props.searchData.map( searchItem => <Listitem searchItem={searchItem} key={searchItem.ObjectGUID} listItemClick={props.listItemClick} />)}      
    </div>
  )
}


export default List;