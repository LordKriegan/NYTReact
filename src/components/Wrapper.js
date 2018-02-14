import React from 'react';
import Panel from "./Panel";
import SearchForm from "./PanelComponents/SearchForm"

class Wrapper extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Panel panelTitle="Search" panelComponent={<SearchForm />} />
                        <Panel panelTitle="Results" panelComponent={<p>placeholder</p>} />
                        <Panel panelTitle="Saved Articles" panelComponent={<p>placeholder</p>} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Wrapper;
