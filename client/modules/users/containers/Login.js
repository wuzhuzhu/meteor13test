import Login from '../components/Login.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const Composer = ({context, clearErrors}, onData) => {
    const {LocalState} = context();
    const error = LocalState.get('LOGIN_ERROR');
    onData(null, {error});
};

export const depsMapper = (context, actions) => ({
    loginUser: actions.users.login,
    clearErrors: actions.users.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(Composer),
    useDeps(depsMapper)
)(Login);