import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux'
import { Login } from '../../actions/authActions';
import './login.scss'

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isLoggedIn) {
            this.props.history.push('/app/dashboard');
        }
    }

    handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { email, password } = values;
                this.props.Login({ email, password });
            }
        });
    }
    handleChange = (e) => {
        debugger;
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { username, password } = this.state;
        return (
            <div className="main-login-container">

            <div className="login-form" align="center">
                <div className="login-heading">
                    <img alt="logo"/>
                    <span> Login to your account</span>
                </div>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                        <Input name="username" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.handleChange} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input name="password" onChange={this.handleChange} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>

                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <p>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    </p>
                    <p>
                    <a className="login-form-forgot" href="">Forgot password </a>

                    Or <a href=""> register now!</a>
                    </p>
                </FormItem>
            </Form>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default connect(mapStateToProps, { Login })(WrappedNormalLoginForm);