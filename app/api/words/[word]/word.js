import { backendURL } from "@/config/backend";

export async function GET(req)
{
    
        const BackCall = await fetch(`${backendURL}/api/words` );
        
}