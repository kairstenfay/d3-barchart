// unfinished/src/components/Chart.js
import React       from 'react';
import ScatterPlot from './ScatterPlot';
import * as d3 from "d3";

const styles = {
    width   : 500,
    height  : 300,
    padding : 30,
};

// The number of data points for the chart.
const numDataPoints = 50;

// A function that returns a random number from 0 to 1000
// const randomNum     = () => Math.floor(Math.random() * 1000);


export default class Chart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    randomizeData() {
        // this.setState({ data: randomDataSet() });
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';

        fetch(url)
            .then(res => res.json())
            .then(jsonData => {
                let data = jsonData.data;
                data = transformData(data);
                this.setState({ data })
            })
            .catch(console.error)
    }

    render() {
        console.log("state");
        console.log(this.state);

        return <div>
            <h1>Playing With React and D3</h1>
            <ScatterPlot {...this.state} {...styles} />
            <div className="controls">
                <button className="btn randomize" onClick={() => this.randomizeData()}>
                    Randomize Data
                </button>
            </div>
        </div>
    }
}



const parseTime = d3.timeParse("%Y-%m-%d");

const transformData = (data) => {
    // split, parse and zip
    let parsedTime = data.map(x => {
        return parseTime(x[0])
    });

    let y = data.map(y => {
        return y[1]
    });

    let newArray = parsedTime.map(function (item, index) {
        return [item, y[index]];
    });

    return newArray;
};