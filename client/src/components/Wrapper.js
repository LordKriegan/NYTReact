import React from 'react';
import API from '../utils/API';
import Panel from "./Panel";
import SearchForm from "./PanelComponents/SearchForm";
import ResultsContainer from "./PanelComponents/ResultsContainer";
import ResultItem from "./PanelComponents/ResultItem";
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
    componentDidMount() {
        this.loadPage()
    }
    loadPage() {
        API.getSavedArticles()
        .then((response) =>{
            this.setState({
                newArticles: [],
                savedArticles: response.data,
                query: "",
                startDate: "",
                endDate: ""
            })
        })
        .catch((error) => {
            console.error(error);
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Panel panelTitle="Search" panelComponent={<SearchForm inputChange={this.handleInputChange} searchBtnFunc={this.fetchNewArticles}/>} />
                        {(this.state.newArticles[0]) ? <Panel panelTitle="Results" panelComponent={
                        <ResultsContainer>{this.state.newArticles.map((elem, i) => {
                            return <ResultItem 
                                    key={"headlineNum" + i} 
                                    articleTitle={elem.headline.main} 
                                    clickHandler={() => API.saveNewsArticle({
                                                                            title: elem.headline.main, 
                                                                            articleDate: elem.pub_date, 
                                                                            url: elem.web_url
                                                                            })
                                                            .then((resp) => this.loadPage())
                                                            .catch((error) => console.error(error))} 
                                    />
                        })}</ResultsContainer>
                        } /> : ""}
                        <Panel panelTitle="Saved Articles" panelComponent={<p>placeholder</p>} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Wrapper;
