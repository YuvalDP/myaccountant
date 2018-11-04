import React, { Component } from 'react'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }


    render() {
        return (
            <div>
                Dashboard component
            </div>
        )
    }
}

export default Dashboard;