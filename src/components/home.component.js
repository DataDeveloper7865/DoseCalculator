import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
        <div>
            <h1> Welcome to the Dose-Calculator! </h1>
            <h1> The Dose-Calculator Consists of the Following Calculators: </h1>
            <ul>
                <li>Weight-Based Dosing</li>
                <li>Flat Dosing</li>
                <li>Step-Dosing</li>
            </ul>
            <h1> Technology Used:</h1>
            <li> React For General Front-End Development</li>
            <li> Graphs: Plotly library</li>
            <li> Tables: Handson Table</li>
            <li> Deployed On: Google App Engine</li>
            <li> Continuous Integration / Deployment Pipeline: Google CI \ CD</li>
            <li> Source Control: Github </li>
        </div>
        );
    }
}

export default Home;