import React, { Component} from 'react';
import './Main.css';

//Components Import
import SearchArea from '../SearchArea/SearchArea';
import Results from "../Results/Results";

// Sample Data
// import { malik, mike } from '../data/sampleData';

class Main extends Component {
    constructor(props) {
        super(props);  
        
        this.state = {
            displayResults: false,
            displayProfile: false,
            displayLoader: false,
            displayError: false,
            disableInput: false,
            searchData: '',
            detailData: ''
        }
    }

    async searchAD(e, query, queryType) {
        e.preventDefault();     
            
        this.setState({
            displayResults: false,
            displayLoader: true,
            displayError: false,
            disableInput: true,
            detailData: ''
        });

        // Online Devleopment
        let url = `http://localhost:5000/${queryType}`;
        // let url = `http://192.168.252.126:5000/${queryType}`;
        try {
            let res = await fetch(`${url}?${queryType}=${query}`);            
            res = await res.json();
            // res = JSON.parse(res);
            
            if(res.length === undefined) {
                res = [res];         
            };
            
            this.setState({
                displayResults: true,
                displayLoader: false,
                disableInput: false,
                searchData: res,
            });

        } catch (error) {
            console.log(error);
            
            this.setState({
                displayLoader: false,
                displayError: true,
                disableInput: false,
                searchData: '',
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
    }

    async componentDidMount() {

        this.setState({
            displayResults: false,
            displayLoader: true,
            displayError: false,
            disableInput: true,
            detailData: ''
        });
        
        let url = `http://localhost:5000/search`;
        try {
            let res = await fetch(url);            
            res = await res.json();
            
            // res = JSON.parse(res);
            this.setState({
                displayResults: true,
                displayLoader: false,
                disableInput: false,
                searchData: res,
            });
        } catch(err) {
            console.log(err);
        }
    };


    async listItemClick(listData) {  
        
        let url = `http://localhost:5000/user?user=${listData.sAMAccountName}`;
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

    renderResultsDiv() {
        if(this.state.displayResults) {
            return (
            <Results 
                searchData={this.state.searchData} 
                detailData={this.state.detailData}
                displayProfile={this.state.displayProfile}
                listItemClick={this.listItemClick.bind(this)}
            />)
        }
    }

    render() {
        return (
            <div className="Main">
                {/* <SearchArea searchAD={this.searchAD.bind(this)} disableInput={this.state.disableInput} /> */}
                <p className="Main-Error" style={{display: this.state.displayError ? 'block' : 'none'}}>Submitted Search Returned Nothing...</p>
                <div className="Main-Loader" style={{display: this.state.displayLoader ? 'block' : 'none'}}></div>
                {this.renderResultsDiv()}
            </div>
        );
    }
};

export default Main;