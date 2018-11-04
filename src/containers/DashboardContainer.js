import React, { Component } from 'react';
import Dashboard from '../components/Dashboard'


class DashboardContainer extends Component {

    render() {
        return(
            <Dashboard
                loading={false}
            />
        )
    }
}

export default DashboardContainer;