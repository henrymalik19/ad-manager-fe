import React, { useState } from 'react'
import './DetailListItem.css';

function DetailListItem(props) {

    let [value, setValue] = useState(props.objProp);

    return (
    <div className="DetailListItem">
        <p className="DetailListItem-Key">{props.objKey}</p>
        <textarea className="DetailListItem-Value" cols="30" rows="5" value={props.objProp} onChange={e => setValue(e.target.value)}></textarea>
    </div>
    )
};

export default DetailListItem;