import {Call} from '@/utils';

export function signUpCall(data)
{
    return Call('/api/auth/sign-up', {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export function logInCall(data)
{
    return Call('/api/auth/log-in', {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export function logOutCall() {
    return Call('/api/auth/log-out', {
        method: 'POST'
    });
}
