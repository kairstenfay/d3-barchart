// unfinished/src/components/scatter-plot.jsx
import React        from 'react';
import * as d3           from 'd3';
import {scaleLinear, scaleTime} from 'd3-scale';
import DataCircles  from './DataCircles';
import XYAxis from './XYAxis';

const parseTime = d3.timeParse("%Y-%m-%d");

const transformData = (data) => {
    // split, parse and zip
    console.log(data);
    console.log("commence");
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

// Returns the largest X coordinate from the data set
const xMax   = (data)  => d3.max(data, (d) => d[0]);
const xMin   = (data)  => d3.min(data, (d) => d[0]);


// Returns the highest Y coordinate from the data set
const yMax   = (data)  => d3.max(data, (d) => d[1]);

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = (props) => {

    console.log('xScale');

    let transformedData = transformData(props.data);

    return scaleTime()
        .domain([xMin(transformedData), xMax(transformedData)])
        .range([props.padding, props.width - props.padding]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
const yScale = (props) => {

    return scaleLinear()
        .domain([0, yMax(props.data)])
        .range([props.height - props.padding, props.padding]);
};

//export default (props) => {

export default class Chart extends React.Component{
    constructor(props) {
        super(props);
        this.state = { data: [["1900-01-01", 0]] };
    }
    componentWillUpdate() {
        console.log("updating");
    }

    render() {
        const scales = {xScale: xScale(this.props), yScale: yScale(this.props)};

        return <svg width={this.props.width} height={this.props.height}>
            <DataCircles {...this.props} {...scales} />
            <XYAxis {...this.props} {...scales} />
        </svg>
    }
}