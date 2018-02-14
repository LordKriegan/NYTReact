import React from "react";

class SearchForm extends React.Component {
    render() {
        return (
            <div style={{ padding: "10px" }}> 
            <form className="form-horizontal text-center">
                <div className="form-group">
                    <label for="searchParams" className="control-label">Search</label>
                    <input type="text" className="form-control" id="searchParams" placeholder="Search Parameters..." />
                </div>
                <div className="form-group">
                    <label for="searchStartYear" className="control-label">Start Year (optional)</label>
                    <input type="number" className="form-control" id="searchStartYear" min="1800" max="3000" />
                </div>
                <div className="form-group">
                    <label for="searchEndYear" className="control-label">End Year (optional)</label>
                    <input type="number" className="form-control" id="searchEndYear" min="1800" max="3000" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Search!</button>
                </div>
            </form>
            </div>
        );
    }
}

export default SearchForm;