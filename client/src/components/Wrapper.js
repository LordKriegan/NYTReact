import React from 'react';
import API from '../utils/API'
import Panel from "./Panel";
import SearchForm from "./PanelComponents/SearchForm"

class Wrapper extends React.Component {
    state = {
        newArticles: [],
        savedArticles: [],
        query: "",
        startDate: "",
        endDate: ""
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    fetchNewArticles = (event) => {
        event.preventDefault()
        API.fetchNewArticles(this.state.query, this.state.startDate, this.state.endDate)
            .then((response) => {
                this.setState({
                    newArticles: response.data.response.docs
                });
                console.log(this.state);
            })
            .catch((error) => {
                console.error(error)
            });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Panel panelTitle="Search" panelComponent={<SearchForm inputChange={this.handleInputChange} searchBtnFunc={this.fetchNewArticles}/>} />
                        <Panel panelTitle="Results" panelComponent={<p>placeholder</p>} />
                        <Panel panelTitle="Saved Articles" panelComponent={<p>placeholder</p>} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Wrapper;
