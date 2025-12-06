import { backendURL } from "@/config/backend";

export async function GET(req)
{
    
        const BackCall = await fetch(`${backendURL}/info`, 
            {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                Cookie: req.headers.get('cookie') || ''
            },
            credentials: "include"
            }
        );
        if (!BackCall.ok) {
            console.log(`Failed to fetch user info, response not OK: ${BackCall.status}`);
        }
         const text = await BackCall.text();
         console.log('the text '+text);
        const json = text ? JSON.parse(text) : null;
        return new Response(JSON.stringify(json), { status: BackCall.status, headers: { 'Content-Type': 'application/json' } });

}