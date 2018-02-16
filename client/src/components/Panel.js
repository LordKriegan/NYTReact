import React from "react";

class Panel extends React.Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.panelTitle}</h3>
                </div>
                <div className="panel-body">
                    {this.props.panelComponent}
                </div>
            </div>
        );
    }
}

export default Panel;