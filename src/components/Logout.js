import React from 'react';
import { Icon } from 'antd';
const Logout = (props) => {
    localStorage.clear();
    window.location.href = '/';
    return (
        <div align="center" style={{ marginTop: '20%' }}>
            <Icon type="loading" style={{ fontSize: '40px' }} theme="outlined" />
        </div>
    )
}

export default Logout;