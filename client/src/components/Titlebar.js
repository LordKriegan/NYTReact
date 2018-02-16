import React from "react";

class Titlebar extends React.Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h3 style={{textDecorationLine: "underline"}}>New York Times Article Scrubbamajigga</h3>
                <p>Search and annotate your favorite fake news articles!</p>
            </div>
        );
    }
}

export default Titlebar;