import React       from 'react';
import BarChart from './BarChart';
import '../Chart.css';

const styles = {
    width: Math.min(window.innerWidth, 700),
    height: Math.min(window.innerHeight - 100, 400),
    padding: 40,
    showToolTip: false
};


export default class Chart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.toggleToolTip = this.toggleToolTip.bind(this);
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

    toggleToolTip(e) {
        let attributes = e.target.attributes;

        this.setState({
            dataDate: attributes['data-date'].nodeValue,
            showToolTip: !this.state.showToolTip, // todo d-r-y
            toolTipSVG: (!this.state.showToolTip) ? renderToolTip(attributes) : null,
            fillColor: (!this.state.showToolTip) ? "black" : "salmon",
        })
    }


    render() {

        return (
        <div id="chart">
            <header className="App-header">
                <h1 id="title">U.S. GDP</h1>
            </header>
            <BarChart {...this.state} {...styles} toolTipAction={this.toggleToolTip} />
        </div>
        )
    }
}

function renderToolTip(attributes) {
    if (attributes && attributes['data-date']) {
        const dataDate = attributes['data-date'].nodeValue;
        const x = attributes.x.nodeValue; // todo import padding
        const y = attributes.y.nodeValue + 90; // todo import padding

        return (

            <g>
                <rect x={x} y={y - 20 - 20} width="100" height="30" fill="salmon" />
                <text id="tooltip" data-date={dataDate} x={x} y={y - 20} fill="black" >
                    {dataDate}
                </text>

                <circle cx={x} cy={y} r="5" fill="none" stroke="black" strokeWidth="2" />
            </g>
        );
    }
}
