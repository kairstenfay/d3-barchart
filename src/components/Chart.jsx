import React       from 'react';
import BarChart from './BarChart';
import transformData from '../actions/transformData';

const styles = {
    width: 500,
    height: 300,
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
                data = transformData(data);
                this.setState({ data })
            })
            .catch(console.error)
    }

    toggleToolTip(e) {
        let target = e.target;
        console.log(target);

        this.setState({
            showToolTip: !this.state.showToolTip
        })
    }

    render() {

        return (
        <div>
            <BarChart {...this.state} {...styles} toolTipAction={this.toggleToolTip} />
                <div className="tooltip" onMouseOver={this.toggleToolTip} onMouseOut={this.toggleToolTip} >
                    Hover over me
                    {(this.state.showToolTip) ? <span className="tooltiptext">Tooltip text</span> : <span></span>}
                </div>
        </div>
        )
    }
}
