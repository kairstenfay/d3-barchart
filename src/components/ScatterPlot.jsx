// unfinished/src/components/scatter-plot.jsx
import React        from 'react';
import * as d3           from 'd3';
import {scaleLinear, scaleTime} from 'd3-scale';
import DataCircles  from './DataCircles';
import XYAxis from './XYAxis';

const parseTime = d3.timeParse("%Y-%m-%d");

const transformData = (props) => {
    // split, parse and zip
    let parsedTime = props.data.map(x => {
        return parseTime(x[0])
    });

    let y = props.data.map(y => {
        return y[1]
    });

    let newArray = parsedTime.map(function (item, index) {
        return [item, y[index]];
    });

    console.log(newArray);
    return newArray;
};

// Returns the largest X coordinate from the data set
const xMax   = (data)  => data[0][0]; // d3.max(data, (d) => d[0]);
const xMin   = (data)  => data[data.length - 1][0]; // d3.min(data, (d) => d[0]);


// Returns the highest Y coordinate from the data set
const yMax   = (data)  => d3.max(data, (d) => d[1]);

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = (props) => {

    return scaleTime()
        .domain([xMin(props.data), xMax(props.data)])
        .range([props.padding, props.width - props.padding]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
const yScale = (props) => {

    console.log(yMax(props.data));

    return scaleLinear()
        .domain([0, yMax(props.data)])
        .range([props.height - props.padding, props.padding]);
};

export default (props) => {
    let transformedData = transformData(props);
    const scales = { xScale: xScale(props), yScale: yScale(props) };
    return <svg width={props.width} height={props.height}>
        <DataCircles {...props} {...scales} />
        <XYAxis {...props} {...scales} />
    </svg>
}