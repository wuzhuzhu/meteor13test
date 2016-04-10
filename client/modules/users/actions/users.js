/**
 * Created by walter on 16/4/10.
 */

export default {
    create({Meteor, LocalState}, email, password) {
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
    clearErrors({LocalStates}) {
        return LocalStates.set('SAVING_ERROR', null);
    }
};