import React from "react";

class ResultItem extends React.Component {

    render() {
        return (
            <div style={{width: "100%", borderStyle: "solid", borderWidth: "2px", borderRadius: "10%"}}className="row">
                <div className="col-xs-9">
                    <h4>{this.props.articleTitle}</h4>
                </div>
                <div className="col-xs-3 text-center">
                    <button onClick={this.props.clickHandler} className="btn btn-default">{this.props.btnTxt}</button>
                </div>
            </div>
        );
    }
}

export default ResultItem;