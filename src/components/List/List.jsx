import React, {useState} from 'react'

import './List.css';

//Import Components
import Listitem from './ListItem';

function List(props) {
    let [searchData, setSearchData] = useState(props.searchData);
    let [filter, setFilter] = useState('name');

    const updateList = (e, filterBy) => {
        let newData = props.searchData.filter( searchItem => {

            if(searchItem[filterBy]) {
                if(searchItem[filterBy].toLowerCase().includes(e.target.value)) {
                    return searchItem;
                };     
            }   
            return false    
        });
        setSearchData(newData);   
    };

    return (        
        <div className={props.displayProfile ? "List-W-Profile" : "List"}>
            <form className="List-Form">
                <select  className="List-Dropdown" defaultValue={filter}  onChange={e => setFilter(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="department">Department</option>
                    <option value="co">Country</option>
                </select>
                <input type="input" className="List-SearchBox" placeholder="Narrow Search..."  onChange={e => updateList(e, filter)}/>   
            </form>
            <div className="List-SearchData">
                {searchData.map( searchItem => <Listitem searchItem={searchItem} key={searchItem.dn} listItemClick={props.listItemClick} />)}
            </div>
        </div>
    )
}

export default List;