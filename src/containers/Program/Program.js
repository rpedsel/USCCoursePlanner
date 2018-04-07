import React, { Component } from 'react';

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
            <div></div>
        );
    }
}

//export default withErrorHandler(Orders, axios);
export default program;