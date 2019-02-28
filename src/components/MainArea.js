import React, { Component} from 'react';
import './MainArea.css';

//Components Import
import Header from './MainAreaComponents/Header';
import Results from "./MainAreaComponents/Results";

class MainArea extends Component {
    constructor(props) {
        super(props);  
        
        this.state = {
            searchResults: false,
            searchData: ''
        }
    }

    async getUsers(e) {
        
        if(e.key === 'Enter') {
            
            let url = "http://localhost:5000/user";
            
            try {
                let res = await fetch(`${url}?user=${e.target.value}`);            
                res = await res.json();
                res = JSON.parse(res);

                this.setState({
                    searchResults: true,
                    searchData: res
                });

            } catch (error) {
                // console.log(error);
                
                this.setState({
                    searchResults: false,
                    searchData: ''
                });             
            }         
        };
    }

    render() {

        let renderResults;
        if(this.state.searchResults) {
            renderResults = <Results searchData={this.state.searchData} />
        }        

        return (
            <div className="MainArea">
                <Header
                    onEnter={(e) => this.getUsers(e)}
                />
                {renderResults}
            </div>
        );
    }
};

export default MainArea;