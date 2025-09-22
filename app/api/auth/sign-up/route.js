export async function POST(request) {
    const BackendURL = process.env.BACKEND_BASE || "http://127.0.0.1:5000";
    try{
        const body = await request.json();
        const destructuredBody = (({ name, email, password, phone, lastName }) => ({ name, email, password, phone, last_name : lastName }))(body);
        const hasScript = Object.values(destructuredBody).some(value => typeof value === 'string' && /<script.*?>.*?<\/script>/i.test(value));
        if (hasScript) {
            return new Response(JSON.stringify({ message: 'Invalid input' }), { status: 400 });
        }
        const BackCall = await fetch(`${BackendURL}/register`, {
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