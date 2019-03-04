import React from 'react'

import './List.css';

//Import Components
import Listitem from './ListItem';

function List(props) {
  return (
    <div className="List">
        {props.searchData.map( user => <Listitem user={user} key={user.ObjectGUID} listItemClick={props.listItemClick} />)}      
    </div>
  )
}


export default List;