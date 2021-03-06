import React, {useState} from 'react'

import './List.css';

//Import Components
import Listitem from './ListItem';

function List(props) {
    const [searchData, setSearchData] = useState(props.searchData);
    const [searchValue, setSearchValue] = useState('');

    const updateList = (e) => {
        setSearchValue(e.target.value);
        let newData = props.searchData.filter( searchItem => {
            if(searchItem.Name.toLowerCase().includes(e.target.value)) {
                return searchItem;
            };            
        });
        setSearchData(newData);        
    };

    return (
        <div className="List">
            <input type="input" className="List-SearchBox" placeholder="Narrow Search" defaultValue={searchValue} onChange={updateList}/>
            {searchData.map( searchItem => <Listitem searchItem={searchItem} key={searchItem.ObjectGUID} listItemClick={props.listItemClick} />)}      
        </div>
    )
}

export default List;