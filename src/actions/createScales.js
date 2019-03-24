import {scaleLinear, scaleTime} from "d3-scale";
import * as d3 from "d3";
const parseTime = d3.timeParse("%Y-%m-%d");

const xMax   = (data)  => {
    return d3.max(data, (d) => parseTime(d[0]));  // todo
};

const xMin = (data) => {
    return d3.min(data, (d) => parseTime(d[0]));  // todo
};

// Returns the highest Y coordinate from the data set
const yMax   = (data)  => {
    return d3.max(data, (d) => d[1]);
};

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = (props) => {
    return scaleTime()
        .domain([xMin(props.data), xMax(props.data)])
        .range([props.padding, props.width - props.padding * 2]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
const yScale = (props) => {
    return scaleLinear()
        .domain([0, yMax(props.data)])
        .range([props.height - props.padding, props.padding]);
};

export {xScale, yScale}