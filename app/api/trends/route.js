
import { NextResponse } from 'next/server';
import googleTrends from 'google-trends-api';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');

    if (!search) {
        return NextResponse.json({ error: 'Search query is required' }, { status: 400 });
    }

    try {
        const results = await googleTrends.interestOverTime({ keyword: search, startTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30) });
        return NextResponse.json(JSON.parse(results));
    } catch (error) {
        console.error('Google Trends API error:', error);
        return NextResponse.json({ error: 'Failed to fetch Google Trends data' }, { status: 500 });
    }
}
