import React, { Component } from 'react';
import { Checkbox } from 'antd';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

class Minimumps20 extends Component {

    render() {
        return (
        <div>
            <h1> Protein Concentraiton</h1>
            <h1> Surfactant Concentration (mg/mL) </h1>
            <ul>
                <li>Min Dose</li>
                <li>MINIMUM PS20</li>
                <li>MINIMUM PS20</li>
            </ul>
            <Checkbox onChange={onChange}> Weight-Based Dosing? (mg/kg) </Checkbox>
        </div>
        );
    }
}

export default Minimumps20;