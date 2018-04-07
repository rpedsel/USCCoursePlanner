import React, { Component } from 'react';

import SearchResult from '../../components/SearchResult/SearchResult';
//import axios from '../../axios-orders';
//import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class searchResults extends Component {
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
            <div>
                <SearchResult ptype="Bachelor's" name="Computer Science" URL="xxx/xxx"/>
                <SearchResult ptype="Bachelor's" name="Gaming" URL="xxx/ooo"/>
                {/* {this.state.orders.map(order => (
                    <Order
                        key={order.id} 
                        ingredients={order.ingredients}
                        price={order.price} />
                ))} */}
            </div>
        );
    }
}

//export default withErrorHandler(Orders, axios);
export default searchResults;