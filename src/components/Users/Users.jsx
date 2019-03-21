import React, { Component } from 'react';
import './Users.css';

//Components Import
import List from '../List/List';
import Profile from '../Profile/Profile';

class Users extends Component {
    constructor(props) {
        super(props);  
        
        this.state = {
            displayList: false,
            listType: 'users',
            displayProfile: false,
            displayLoader: false,
            displayError: false,
            searchData: '',
            detailData: ''
        }
    }

    async componentDidMount() {

        this.setState({
            displayLoader: true,
        });
        
        // let url = `http://192.168.248.76:5000/api/user`;
        let url = `http://localhost:5000/api/user`;
        try {
            let res = await fetch(url);            
            res = await res.json();
            
            res.sort((a, b) => {
                // Use toUpperCase() to ignore character casing
                const userA = a.name.toUpperCase();
                const userB = b.name.toUpperCase();
              
                let comparison = 0;
                if (userA > userB) {
                  comparison = 1;
                } else if (userA < userB) {
                  comparison = -1;
                }
                return comparison;
            });

            this.setState({
                displayList: true,
                displayLoader: false,
                searchData: res,
            });
        } catch(err) {
            console.log(err);

            this.setState({
                displayList: false,
                displayLoader: false,
                displayError: true,
            })
        }
    };


    async listItemClick(listData) {

        // let url = `http://192.168.248.76:5000/api/user?user=${listData.sAMAccountName}`;
        let url = `http://localhost:5000/api/user?user=${listData.sAMAccountName}`;

        try {
            let res = await fetch(url);            
            res = await res.json();
            
            this.setState({
                detailData: res[0],
                displayProfile: true
            });

        } catch(err) {
            console.log(err);
        }
    }

    renderList() {
        if(this.state.displayList) {
            return <List searchData={this.state.searchData} listItemClick={this.listItemClick.bind(this)} displayProfile={this.state.displayProfile} listType={this.state.listType}/>
        }
    }

    renderProfile() {
        if(this.state.displayProfile) {
            return <Profile detailData={this.state.detailData} listType={this.state.listType} />
        }
    }

    render() {
        return (
            <div className="Users">
                <p className="Users-Error" style={{display: this.state.displayError ? 'block' : 'none'}}>Submitted Search Returned Nothing...</p>
                <div className="Users-Loader" style={{display: this.state.displayLoader ? 'block' : 'none'}}></div>
                {this.renderList()}
                {this.renderProfile()}
            </div>
        );
    }
};

export default Users;