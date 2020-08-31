import React, { Component } from 'react';
import { Button, Input } from 'antd';
import Plotly from 'plotly.js-cartesian-dist';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);

const word1 = "hello";

function calculateDose() {
    console.log(`hello world from button ${word1}`);
}

class Flatdose extends Component {
    constructor() {
        super()
        this.state = {
            dose: "dose",
            volume: "volume",
            dpConc: "dpConc",
            ps20Conc: "ps20Conc",
            sucroseConc: "sucroseConc"
        }
    }


    render() {
        return (
            <>
                <div >
                    <h1> Hello World From Flat Dose </h1>
                    <Input addonBefore = "Input Dose Here" placeholder="Dose" />
                </div>  
                <div id="input-element">
                    <Input addonBefore = "Input DP Conc Here" placeholder="[DP mg/mL]"/>
                </div>
                <div id="input-element">
                    <Input addonBefore = "Input PS20 Conc Here" placeholder="[PS20]"/>
                </div>
                <div id="input-element">
                    <Input addonBefore = "Input Sucrose Conc Here" placeholder="[Sucrose]"/>
                </div>
                <div id="input-element">
                    <Button onClick = {calculateDose} type="primary"> Calculate! </Button>
                </div>
                    <h1> The total amount of drug dosed is (in mg): {this.state.dose} </h1>
                    <h1> The total amount of volume dosed is (in mL): {this.state.dpConc} </h1>
                    <h1> The total amount of volume dosed is (in mL): {this.state.dpConc} </h1>
                    <h1> The total amount of PS20 dosed is (%w/v)): {this.state.ps20Conc} </h1>
                    <h1> The total amount of sucrose dosed is: {this.state.sucroseConc} </h1>
                <div>
                    <Plot 
                        data={[
                            {
                            x: [1, 2, 3,  4, 5],
                            type: 'histogram',
                            marker: {color: 'green'},
                            name: 'Historical Data'
                            }
                        ]}
                        layout = {{
                        width: 600,
                        height: 500,
                        bargap: 0.05,
                        bargroupgap: 0.2,
                        barmode: 'overlay',
                        title: 'Surface/Volume',
                        xaxis: {title: "Fill Volume"},
                        yaxis: {title: "Surface/Volume[1/mm]"}
                        }}

                        graphDiv="graph" 
                    />
                    <Plot 
                        data={[
                            {
                            x: [1, 2, 3,  4, 5],
                            type: 'histogram',
                            marker: {color: 'red'},
                            name: 'Historical Data'
                            }
                        ]}
                        layout = {{
                        width: 600,
                        height: 500,
                        bargap: 0.05,
                        bargroupgap: 0.2,
                        barmode: 'overlay',
                        title: 'Wetted Surface/Volume',
                        xaxis: {title: "Fill Volume [mL]"},
                        yaxis: {title: "Wetted Surface/Volume[1/mm]"}
                        }}

                        graphDiv="graph" 
                    />
                    <Plot 
                        data={[
                            {
                            x: [1, 2, 3,  4, 5],
                            type: 'histogram',
                            marker: {color: 'blue'},
                            name: 'Historical Data'
                            }
                        ]}
                        layout = {{
                        width: 600,
                        height: 500,
                        bargap: 0.05,
                        bargroupgap: 0.2,
                        barmode: 'overlay',
                        title: 'Head Space/Liquid Ratio',
                        xaxis: {title: "Fill Volume [mL]"},
                        yaxis: {title: "HeadSpace/Liquid Ratio [-]"}
                        }}

                        graphDiv="graph" 
                    />
                    <Plot 
                        data={[
                            {
                            x: [1, 2, 3,  4, 5],
                            type: 'histogram',
                            marker: {color: 'yellow'},
                            name: 'Historical Data'
                            }
                        ]}
                        layout = {{
                        width: 600,
                        height: 500,
                        bargap: 0.05,
                        bargroupgap: 0.2,
                        barmode: 'overlay',
                        title: 'Liquid/Air Interface',
                        xaxis: {title: "Fill Volume"},
                        yaxis: {title: "Liquid/Air Interface [mm2]"}
                        }}

                        graphDiv="graph" 
                    />
                </div>
            </>
        );
    }

}

export default Flatdose;