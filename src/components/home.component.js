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
        </div>
        );
    }
}

export default Home;