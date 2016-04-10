import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';


class NewUser extends React.Component {
    render() {
        const {error} = this.props;
        return (
            <Col xs={12} sm={6} smOffset={3}>
                <Panel>
                    <h1>注册</h1>
                    {error ? <p style={{color:'red'}}>{error}</p> : null}
                    <form>
                        <Input ref="email" type="email" placeholder="电子邮箱"/>
                        <Input ref="password" type="password" placeholder="密码"/>
                        <ButtonInput onClick={this.createUser.bind(this)}
                            type="submit" bsStyle="primary" values="提交" />
                    </form>
                </Panel>
            </Col>
        )
    }

    createUser(e) {
        e.preventDefault();
        const {create} = this.props;
        const {email, password} = this.refs;
        create(email.getValue(), password.getValue());
        email.getInputDomNode().value = '';
        password.getInputDomNode().value = '';
    }
}

export default NewUser;