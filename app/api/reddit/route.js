
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');

    try {
        const response = await fetch(`https://hackapi-sigma.vercel.app/getStats/${encodeURIComponent(search)}`);
        const data = await response.json();

        return new Response(JSON.stringify(data), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Proxy error:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}