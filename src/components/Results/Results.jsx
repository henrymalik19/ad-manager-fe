import React from 'react';
import './Results.css';

// Import COmponents
import List from '../List/List';
import DetailList from '../List/DetailList';
import Profile from '../Profile';

function Results(props) {

    function renderProfile() {
        if(props.displayProfile){
            return <Profile detailData={props.detailData}/>
        }
    }


    return (
        <div className="Results">
            <List searchData={props.searchData} listItemClick={props.listItemClick} />
            {/* <DetailList detailData={props.detailData} /> */}
            {renderProfile()}
        </div>
    )
};

export default Results;