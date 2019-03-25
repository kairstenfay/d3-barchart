import React from 'react';

export default function(attributes) {
    if (attributes && attributes['data-date']) {
        const dataDate = attributes['data-date'].nodeValue;
        const dataGDP = attributes['data-gdp'].nodeValue;

        const x = attributes.x.nodeValue; // todo import padding
        const y = attributes.y.nodeValue + 90; // todo import padding
        const triangleWidth = 10; // todo import from styles or put in config

        const polygonPoints = `${x - triangleWidth},${y - triangleWidth} 
                               ${x},${y - 1}
                               ${x + triangleWidth},${y - triangleWidth}
                               `;

        const rectangleWidth = 170;
        const rectangleHeight = 40;
        return (

            <g>
                <rect x={x - triangleWidth - 0.5 * rectangleWidth}
                      y={y - triangleWidth - rectangleHeight}
                      width={rectangleWidth}
                      height={rectangleHeight}
                      fill="black" />
                <text id="tooltip" className="date-tooltip-text" data-date={dataDate}
                      x={x - 0.5 * rectangleWidth}
                      y={y - 30}
                      fill="white" >
                    {dataDate}
                </text>
                <text className="gdp-tooltip-text"
                      x={x - 0.5 * rectangleWidth}
                      y={y - 15}
                      fill="white" >
                    ${dataGDP} billion USD
                </text>
                <polygon points={polygonPoints} />

            </g>
        );
    }
}