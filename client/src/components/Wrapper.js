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
                        {/* search form */}
                        <Panel query={this.state.query} endDate={this.state.endDate} startDate={this.state.startDate} panelTitle="Search" panelComponent={<SearchForm inputChange={this.handleInputChange} searchBtnFunc={this.fetchNewArticles}/>} />
                        
                        {/* search results */}
                        {(this.state.newArticles[0]) ? <Panel panelTitle="Results" panelComponent={
                            <ResultsContainer>
                                {this.state.newArticles.map((elem, i) => {
                                    return <ResultItem
                                            btnTxt="Save!" 
                                            key={"headlineNum" + i} 
                                            articleTitle={elem.headline.main} 
                                            clickHandler={() => API.saveNewsArticle({
                                                                                    title: elem.headline.main, 
                                                                                    articleDate: elem.pub_date, 
                                                                                    url: elem.web_url
                                                                                    })
                                                                    .then((resp) => {
                                                                        this.loadPage()
                                                                    })
                                                                    .catch((error) => console.error(error))} 
                                            />
                                })}
                            </ResultsContainer>
                        } /> : ""}

                        {/* saved results */}

                        {(this.state.savedArticles[0]) ? <Panel panelTitle="Saved Articles" panelComponent={
                            <ResultsContainer>
                                {this.state.savedArticles.map((elem, i) => {
                                    return <ResultItem 
                                            btnTxt="Delete!"
                                            key={"headlineNum" + i} 
                                            articleTitle={elem.title} 
                                            clickHandler={() => API.deleteNewsArticle(elem._id)
                                                                    .then((resp) => {
                                                                        this.loadPage()
                                                                    })
                                                                    .catch((error) => console.error(error))} 
                                            />
                                })}
                            </ResultsContainer>
                        } /> : ""}

                        {/* {(this.state.savedArticles[0]) ? <Panel panelTitle="Saved Articles" panelComponent={<p>placeholder</p>} /> : "" } */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Wrapper;
