import React from "react";

class SearchForm extends React.Component {
    render() {
        return (
            <div style={{ padding: "10px" }}> 
            <form className="form-horizontal text-center">
                <div className="form-group">
                    <label htmlFor="searchParams" className="control-label">Search</label>
                    <input onChange={this.props.inputChange} name="query" type="text" className="form-control" id="searchParams" placeholder="Search Parameters..." />
                </div>
                <div className="form-group">
                    <label htmlFor="searchStartYear" className="control-label">Start Year (optional)</label>
                    <input onChange={this.props.inputChange} name="startDate" type="number" className="form-control" id="searchStartYear" min="1851" max="3000" />
                </div>
                <div className="form-group">
                    <label htmlFor="searchEndYear" className="control-label">End Year (optional)</label>
                    <input onChange={this.props.inputChange} name="endDate" type="number" className="form-control" id="searchEndYear" min="1851" max="3000" />
                </div>
                <div className="form-group">
                    <button onClick={this.props.searchBtnFunc}type="submit" className="btn btn-default">Search!</button>
                </div>
            </form>
            </div>
        );
    }
}

export default SearchForm;