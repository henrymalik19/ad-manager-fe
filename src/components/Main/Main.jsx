import React, { Component} from 'react';
import './Main.css';

//Components Import
import SearchBox from '../SearchBox/SearchBox';
import Results from "../Results/Results";

// Sample Data
// import { malik, mike } from '../data/sampleData';

class Main extends Component {
    constructor(props) {
        super(props);  
        
        this.state = {
            displayResults: false,
            displayLoader: false,
            displayError: false,
            displayCompare: false,
            searchData: '',
            userData: '',
            disableInput: false
        }
    }

    async getUsers(e) {

        let userQuery;

        if(e.key === 'Enter') {
            
            this.setState({
                displayResults: false,
                displayLoader: true,
                displayError: false,
                disableInput: true,
                userData: ''
            });

            // Online Devleopment
            let url = "http://localhost:5000/user";
            userQuery = e.target.value;
            try {
                let res = await fetch(`${url}?user=${userQuery}`);            
                res = await res.json();
                res = JSON.parse(res);

                this.setState({
                    displayResults: true,
                    displayLoader: false,
                    searchData: res,
                    disableInput: false
                });

            } catch (error) {
                console.log(error);
                
                this.setState({
                    displayLoader: false,
                    displayError: true,
                    searchData: '',
                    disableInput: false
                });       
                 
            }  

            // Offline Development
            // if (e.target.value === 'malik') {
            //     this.setState({
            //         displayResults: true,
            //         displayLoader: false,
            //         searchData: malik,
            //         disableInput: false
            //     });  
            // } else if (e.target.value === 'mike'){  
            //     this.setState({
            //         displayResults: true,
            //         displayLoader: false,
            //         searchData: mike,
            //         disableInput: false
            //     });
            // } else {
            //     this.setState({
            //         displayResults: false,
            //         displayLoader: false,
            //         displayError: true,
            //         searchData: '',
            //         disableInput: false
            //     });  

            // };  
        };
    }


    displayUserDetails(e) {

        if(this.state.searchData.length === undefined) {
            this.setState({
                userData: this.state.searchData
            });
            
        } else {
            let user = this.state.searchData.find( el => {
                return el.SamAccountName === e.target.dataset.samname;            
            });
            
            // e.target.classList.add('selected');
            
            this.setState({
                userData: user
            });
        }
    }

    renderResultsDiv() {
        if(this.state.displayResults) {
            return <Results searchData={this.state.searchData} userData={this.state.userData} displayUserDetails={this.displayUserDetails.bind(this)} />
        }
    }


    render() {
        return (
            <div className="Main">
                <SearchBox getUsers={this.getUsers.bind(this)} disableInput={this.state.disableInput} />
                <p className="Main-Error" style={{display: this.state.displayError ? 'block' : 'none'}}>Submitted Search Returned Nothing...</p>
                <div className="Main-Loader" style={{display: this.state.displayLoader ? 'block' : 'none'}}></div>
                {this.renderResultsDiv()}
            </div>
        );
    }
};

export default Main;