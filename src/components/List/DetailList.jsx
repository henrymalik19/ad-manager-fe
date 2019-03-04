import React from 'react'
import './DetailList.css';

import DetailListItem from './DetailListItem';

function DetailList(props) {
  return (
    <div className="DetailList">
        {Object.keys(props.detailData).map( (objKey, index) => <DetailListItem detailData={props.detailData} key={index} objKey={objKey} objProp={props.detailData[objKey]}/>)}   
    </div>
  )
}

export default DetailList;
