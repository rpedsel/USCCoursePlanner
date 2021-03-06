import React, { Component } from 'react';
import Graph from 'react-graph-vis';

import classes from './GraphView.css';

const graph = {
    nodes: [
        { id: 1, label: 'Node 1' },
        { id: 2, label: 'Node 2' },
        { id: 3, label: 'Node 3' },
        { id: 4, label: 'Node 4' },
        { id: 5, label: 'Node 5' }
    ],
    edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
    ]
};

const options = {
    layout: {
        hierarchical: false
    },
    edges: {
        color: "#000005"
    }
};

const events = {
    select: function (event) {
        const { nodes, edges } = event;
    }
}

class graphView extends Component {
    state = {
        network: {}
    }
    render () {
        return (
            <div className={classes.graphView}>
            <Graph graph={graph} options={options} events={events} style={{ height: "640px" }}/>
        </div >
        );
    }
};


export default graphView;