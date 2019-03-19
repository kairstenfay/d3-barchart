// unfinished/src/components/Chart.jsx
import React       from 'react';
import ScatterPlot from './ScatterPlot';
import * as d3 from 'd3';

const styles = {
    width   : 500,
    height  : 300,
    padding : 30,
};

// // The number of data points for the chart.
// const numDataPoints = 25;
//
// // A function that returns a random number from 0 to 1000
// const randomNum     = () => Math.floor(Math.random() * 1000);
//
// // A function that creates an array of 50 elements of (x, y) coordinates.
// const randomDataSet = () => {
//     return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
// };

// const getData = () => {
//         const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';
//
//         let test;
//         test = fetch(url)
//             .then(response => response.json())
//             .then(data => data.data);
//
//     };


export default class Chart extends React.Component{
    constructor(props) {
        super(props);
        this.state = { data: [0, 0] };
    }

    componentWillMount() {
        const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';

        fetch(url)
            .then(response => response.json())
            .then(jsonData => {

                this.setState({
                    data: jsonData.data
                });

            })
    }


    render() {

        return (
            <div>
            <h1>Playing With React and D3</h1>
            <ScatterPlot {...this.state} {...styles} />
            <div className="controls">
                <button className="btn randomize" onClick={() => this.randomizeData()}>
                    Randomize Data
                </button>
            </div>
            <div>
                {this.state.data[0]}
            </div>
        </div>
        )}
}