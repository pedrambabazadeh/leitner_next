import { Call } from "@/utils";

export function userInfoCall()
{
    return Call('/api/user/info', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'}
        })}        