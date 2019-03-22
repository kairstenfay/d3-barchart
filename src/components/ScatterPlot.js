// unfinished/src/components/scatter-plot.jsx
import React        from 'react';
import * as d3           from 'd3';
import {scaleLinear, scaleTime} from 'd3-scale';
import DataCircles  from './DataCircles';
import XYAxis from './XYAxis';


// Returns the largest X coordinate from the data set
const xMax   = (data)  => {
    return d3.max(data, (d) => d[0]);
};

// Returns the highest Y coordinate from the data set
const yMax   = (data)  => {
    return d3.max(data, (d) => d[1]);
};

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = (props) => {
    let transformedData = transformData(props.data);
    return scaleTime()
        .domain([0, xMax(transformedData)])
        .range([props.padding, props.width - props.padding * 2]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
const yScale = (props) => {
    return scaleLinear()
        .domain([0, yMax(props.data)])
        .range([props.height - props.padding, props.padding]);
};

export default (props) => {
    const scales = { xScale: xScale(props), yScale: yScale(props) };
    return <svg width={props.width} height={props.height}>
        <DataCircles {...props} {...scales} />
        <XYAxis {...props} {...scales} />
    </svg>
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