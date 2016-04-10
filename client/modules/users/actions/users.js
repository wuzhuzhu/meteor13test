/**
 * Created by walter on 16/4/10.
 */

export default {
    create({Meteor, LocalState, FlowRouter}, email, password) {
        if (!email) {
            return LocalState.set('CREATE_USER_ERROR', '电子邮件是必填项');
        }

        if (!password) {
            return LocalState.set('CREATE_USER_ERROR', '密码是必填项');
        }

        LocalState.set('CREATE_USER_ERROR', null);

        Accounts.createUser({email,password});
        FlowRouter.go('/');
    },
    login({Meteor, LocalState, FlowRouter}, email, password) {
        if (!email) {
            return LocalState.set('LOGIN_ERROR', '电子邮件是必填项');
        }

        if (!password) {
            return LocalState.set('LOGIN_ERROR', '密码是必填项');
        }

        LocalState.set('LOGIN_ERROR', null);

        Meteor.loginWithPassword(email, password);
        FlowRouter.go('/')
    },
    clearErrors({LocalState}) {
        return LocalState.set('SAVING_ERROR', null);
    }
};