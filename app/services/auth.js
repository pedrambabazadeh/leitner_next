import {Call} from '@/utils';

export function signUpCall(data)
{
    return Call('/api/auth/sign-up', {
        method: 'POST',
        body: JSON.stringify(data)
    });
}