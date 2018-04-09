import React, { Component } from 'react';

import GraphView from '../../containers/GraphView/GraphView';
import Aux from '../../hoc/Aux/Aux';
class program extends Component {
    state = {
    }

    // componentDidMount() {
    //     axios.get('/orders.json')
    //         .then(res => {
    //             const fetchedOrders = [];
    //             for (let key in res.data) {
    //                 fetchedOrders.push({
    //                     ...res.data[key],
    //                     id: key
    //                 });
    //             }
    //             this.setState({ loading: false, orders: fetchedOrders });
    //         })
    //         .catch(err => {
    //             this.setState({ loading: false });
    //         });
    // }

    render() {
        return (
            <Aux>
                <h1 style={{textAlign: 'center'}}>Program Name</h1>
                <GraphView />
            </Aux>
        );
    }
}

//export default withErrorHandler(Orders, axios);
export default program;