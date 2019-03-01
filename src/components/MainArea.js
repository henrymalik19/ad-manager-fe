import React, { Component} from 'react';
import './MainArea.css';

//Components Import
import Header from './MainAreaComponents/Header';
import Results from "./MainAreaComponents/Results";


// Sample Data
import { malik, mike } from '../data/sampleData';

class MainArea extends Component {
    constructor(props) {
        super(props);  
        
        this.state = {
            displayResults: false,
            searchData: '',
            userData: ''
        }
    }

    async getUsers(e) {
        
        if(e.key === 'Enter') {
            
            // let url = "http://localhost:5000/user";
            
            // try {
            //     let res = await fetch(`${url}?user=${e.target.value}`);            
            //     res = await res.json();
            //     res = JSON.parse(res);

            //     this.setState({
            //         searchResults: true,
            //         searchData: res
            //     });

            // } catch (error) {
            //     // console.log(error);
                
            //     this.setState({
            //         searchResults: false,
            //         searchData: ''
            //     });             
            // }  
            if (e.target.value === 'malik') {
                this.setState({
                    displayResults: true,
                    searchData: malik
                });  
            } else {  
                this.setState({
                    displayResults: true,
                    searchData: mike
                });
            };  
        };
    }


    displayUserDetails(e) {

        let user = this.state.searchData.find( el => {
            return el.SamAccountName === e.target.dataset.samname;            
        });
        
        // e.target.classList.add('selected');
        console.log(user);
        
        this.setState({
            userData: user
        });
    }


    renderResults() {
        if(this.state.displayResults) {
            return <Results searchData={this.state.searchData} userData={this.state.userData} displayUserDetails={this.displayUserDetails.bind(this)} />
        }
    }


    render() {
        return (
            <div className="MainArea">
                <Header
                    getUsers={(e) => this.getUsers(e)}
                />
                {this.renderResults()}
            </div>
        );
    }
};

export default MainArea;