import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';

class Login extends React.Component {
    render() {
        const {error} = this.props;
        return (
            <Col xs={12} sm={6} smOffset={3}>
                <Panel>
                    <h1>登陆</h1>
                    {error ? <p style={{color:'red'}}>{error}</p> : null}
                    <form>
                        <Input ref="email" type="email" placeholder="电子邮箱"/>
                        <Input ref="password" type="password" placeholder="密码"/>
                        <ButtonInput onClick={this.login.bind(this)} bsStyle="primary" type="submit" value="登陆" />
                    </form>
                </Panel>
            </Col>
        );
    }
    login(e) {
        e.preventDefault();
        const {loginUser} = this.props;
        const {email,password} = this.refs;
        loginUser(email.getValue(),password.getValue());
        email.getInputDOMNode().value = '';
        password.getInputDOMNode().value = '';
    }
}

export default Login;