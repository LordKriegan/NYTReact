import React from "react";

class ResultsContainer extends React.Component {

    render() {
        return (
            <div className="list-overflow-container">
                <ul className="list-group">
                    <li className="list-group-item">
                        {this.props.children}
                    </li>
                </ul>
            </div>
        );
    }
}

export default ResultsContainer;