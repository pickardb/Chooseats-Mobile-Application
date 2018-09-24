import { feathersServices, feathersAuthentication } from '../feathers/index';

export const createUser = (values, dispatch) => {
    const signupAction = dispatch(feathersServices.users.create(values, {}));

    signupAction.then(() => (
        dispatch(feathersAuthentication.authenticate({ strategy: 'local', email: values.email, password: values.password }))
    ));
};