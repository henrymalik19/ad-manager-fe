import React, { Component } from 'react';
import './Results.css';

class Results extends Component {

    state = {
        listData: '',
        listDataDetail: ''
    }

    renderList() {

        let userList;
        
        if(this.props.searchData.length !== undefined) {

            userList = this.props.searchData.map( user => {
                return ( 
                    <div className="Results-UserCard" onClick={this.props.displayUserDetails} key={user.SamAccountName} data-samname={user.SamAccountName}>
                        {user.GivenName} {user.Surname}
                    </div>
                );
            });

        } else {
            let user = this.props.searchData;
            userList =
                <div className="Results-UserCard" onClick={this.props.displayUserDetails} key={user.SamAccountName} data-samname={user.SamAccountName}>
                    {user.GivenName} {user.Surname}
                </div>;
        };

        return userList;
    }

    renderListDetail() {
        if(typeof this.props.userData === 'object') {
            let counter = 0;
            let html = Object.keys(this.props.userData).map( key=> {
                return (
                        <div className="Results-List-Detail-Props" key={counter++}>
                            <p className="Results-List-Detail-Props-Key">{key}</p>
                            <textarea className="Results-List-Detail-Props-Value" cols="30" rows="5" value={JSON.stringify(this.props.userData[key])}></textarea>
                            {/* <input type="text" className="Results-List-Detail-Props-Value" value={JSON.stringify(this.props.userData[key])}/> */}
                        </div>
                    )
            });

            return html;
        };
        
    }


    render() {
        return (
            <div className="Results">
                <div className="Results-List">
                    {this.renderList()}
                </div>  

                <div className="Results-List-Detail">
                    {this.renderListDetail()}
                </div>
            </div>
        )
    }
};

export default Results;