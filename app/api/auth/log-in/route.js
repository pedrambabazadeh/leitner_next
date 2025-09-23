import {backendURL} from '@/config/backend.js';

export async function POST(request) {
    try{
        const body = await request.json();
        const destructuredBody = (({ email, password }) => ({ email, password }))(body);
        const hasScript = Object.values(destructuredBody).some(value => typeof value === 'string' && /<script.*?>.*?<\/script>/i.test(value));
        if (hasScript) {
            return new Response(JSON.stringify({ message: 'Invalid input' }), { status: 400 });
        }
        const BackCall = await fetch(`${backendURL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(destructuredBody),
            credentials: "include"
        });
        const text = await BackCall.text();
        const json = text ? JSON.parse(text) : null;
        return new Response(JSON.stringify(json), { status: BackCall.status, headers: { 'Content-Type': 'application/json' } });

    }
    catch (error) {
        return new Response(JSON.stringify({ message: error.message || "server error" }), { status: 500 });
    }
}