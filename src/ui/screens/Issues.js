import React, { Component } from 'react';
import IssuesTable from '../../components/table/index';

class Issues extends React.Component {
    render() {
        return (
          <div className="container">
            <IssuesTable />
          </div>
        )
    }
}

export default Issues;
