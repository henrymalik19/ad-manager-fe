import React, { Component } from 'react';
import './Results.css';

class Results extends Component {
   
    state = {
        userData: ''
    }
  
    
    renderList() {

        let userList;
        
        if(this.props.searchData.length !== undefined) {

            userList = this.props.searchData.map( user => {
                return ( 
                    <div className="Results-UserCard" onClick={this.renderUser.bind(this)} key={user.SamAccountName} data-samname={user.SamAccountName}>
                        {user.GivenName} {user.Surname}
                    </div>
                );
            });

        } else {

            userList =
                <div className="Results-UserCard" key={this.props.searchData.SamAccountName}>
                    <h3>{this.props.searchData.GivenName} {this.props.searchData.Surname}</h3>
                    <h4>{this.props.searchData.Department}</h4>
                    <p>{this.props.searchData.EmailAddress}</p>
                </div>;
        };

        return userList;
    }

    renderUser(e) {

        let user = this.props.searchData.find( el => {
            return el.SamAccountName === e.target.dataset.samname
        });

        this.setState({
            userData: user
        });
    }

    render
    render() {

        if(typeof this.state.userData === 'object') {

            return (
                <div className="Results">
                    <div className="Results-List">
                        {this.renderList()}
                    </div>  
    
                    <div className="Results-UserInfo">
                        <p>{JSON.stringify(this.state.userData)}</p>
                    </div>
                </div>
            )
            
        } else {
            return (
                <div className="Results">
                    <div className="Results-List">
                        {this.renderList()}
                    </div>  
    
                    <div className="Results-UserInfo">
                    </div>
                </div>
            )
        }
    } 
};

export default Results;