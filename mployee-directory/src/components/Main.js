import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Nav from "./Nav";
import SearchBox from "./SearchBox";
import DataTable from "./DataTable";
import API from "../utils/API";

class Main extends Component {
    state = {
        results: [],
        search: ""
    };

    // When this component mounts
    componentDidMount() {
        this.searchEmployeees();
    }

    searchEmployeees = () => {
        API.listEmployees(20)
            .then(res => {
                this.setState({ results: res.data.results });
                console.log(this.state.results)
            }).catch(err => console.log(err))

    };

    handleInputChange = event => {
        const value = event.target.value;
        console.log(value)
        const name = value.split(" ");

        //const filteredResult = this.state.results.filter(ename => (ename.name.first === name[0]) || (name.first === name[0] && name.last === name[1])); 

        const filteredResult = this.state.results.filter(ename => (ename.name.first === name[0]) || (ename.name.first === name[0] && ename.name.last === name[1]));

        
        this.setState({
            results: filteredResult
        });


    };

    // When the form is submitted, search the OMDB API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployeees(this.state.search);
    };

    render() {
        return (
            <Wrapper>
                <Nav />
                <SearchBox
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <DataTable results={this.state.results} />
            </Wrapper>
        );
    }
}

export default Main;