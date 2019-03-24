import React       from 'react';
import BarChart from './BarChart';

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
            showToolTip: !this.state.showToolTip,
            toolTipText: (!this.state.showToolTip) ? renderToolTip(attributes) : null,
            dataDate: attributes['data-date'].nodeValue,
            toolTipX: attributes.x,
            toolTipY: attributes.y
        })
    }


    render() {

        return (
        <div>
            <BarChart {...this.state} {...styles} toolTipAction={this.toggleToolTip} />

        </div>
        )
    }
}

function renderToolTip(attributes) {
    if (attributes && attributes['data-date']) {
        return (
            <text id="tooltip" data-date={attributes['data-date'].nodeValue} x="65" y="55"
                // x={this.props.toolTipX + 3} y={this.props.toolTipY + 5}
                  className="small">{attributes['data-date'].nodeValue}</text>
        );

        {/*<div id="tooltip" data-date={attributes['data-date'].nodeValue}>*/}
        {/*<div className="tooltiptext">*/}
        {/*<h2>Date</h2>*/}
        {/*<p>*/}
        {/*{attributes['data-date'].nodeValue}*/}
        {/*</p>*/}

        {/*<h2>GDP</h2>*/}
        {/*<p>*/}
        {/*{attributes['data-gdp'].nodeValue}*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*</div>*/}
    }
}
