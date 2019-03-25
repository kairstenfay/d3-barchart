import * as d3 from "d3";

const parseTime = d3.timeParse("%Y-%m-%d");

export default function (data) { // todo
    // split, parse and zip
    let parsedTime = data.map(x => {
        return parseTime(x[0])
    });

    let y = data.map(y => {
        return y[1]
    });

    return parsedTime.map(function (item, index) {
        return [item, y[index]];
    });

};
