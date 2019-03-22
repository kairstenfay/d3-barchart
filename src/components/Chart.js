// unfinished/src/components/Chart.js
import React       from 'react';
import ScatterPlot from './ScatterPlot';

const styles = {
    width   : 500,
    height  : 300,
    padding : 30,
};

// The number of data points for the chart.
const numDataPoints = 50;

// A function that returns a random number from 0 to 1000
// const randomNum     = () => Math.floor(Math.random() * 1000);

// A function that creates an array of 50 elements of (x, y) coordinates.
const randomDataSet = () => {
    //return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
    const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';

    fetch(url)
        .then(response => response.json()
            .then(function(data) {
            // console.log(data.data);
                let test = data.data.map(x => x);
                return test;
        }));
};

export default class Chart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    randomizeData() {
        this.setState({ data: randomDataSet() });
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