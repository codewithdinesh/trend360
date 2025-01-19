import React, { useState, useEffect } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import RedditPosts from './searchResult';
import TrendsDisplay from './TrendsDisplay';
import TimelineGraph from './TimelineGraph';
import MarkdownViewer from './markdownViewer';

const ArtFinderSearch = ({ searchQ }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [redditData, setRedditData] = useState(null);
    const [googleData, setGoogleData] = useState(null);
    const [langflowData, setLangflowData] = useState(null);
    const [langflowLoading, setLangflowLoading] = useState(false);


    useEffect(() => {
        if (searchQ) {
            setSearchQuery(searchQ);
        }
    }, [searchQ]);

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!searchQuery.trim()) {
            setError('Please enter a search term');
            return;
        }

        setLoading(true);
        setError('');
        setRedditData(null);
        setGoogleData(null);
        setLangflowData(false);

        try {

            // Fetching Reddit data using the proxy endpoint
            const response = await fetch(`/api/reddit?search=${encodeURIComponent(searchQuery)}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setRedditData(data);

            // Fetching Google Trends data
            const googleResponse = await fetch(`/api/trends?search=${encodeURIComponent(searchQuery)}`);

            // find by prompt
            if (!googleResponse.ok) {
                throw new Error(`HTTP error! status: ${googleResponse.status}`);
            }



            const googleData = await googleResponse.json();
            setGoogleData(googleData);

            fetchLangflowData();
        } catch (err) {
            console.error('API Error:', err);
            setError('Failed to fetch data. Please try again.');
        } finally {
            setLoading(false);
        }
    };


    const fetchLangflowData = async () => {

        setLangflowLoading(true);
        if (!searchQuery.trim()) {
            return;
        }

        try {

            const response = await fetch(`/api/prompt?search=${encodeURIComponent(searchQuery)}`);


            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // console.log('Langflow API Data:', data);


            const messageText = data.outputs[0].outputs[0].messages[0].message || "No insights available.";

            setLangflowData(messageText);

            console.log('Langflow Data:', messageText);

            setLangflowLoading(false);

        } catch (err) {
            console.error('Langflow API Error:', err);
            setLangflowLoading(true);
        }
    };



    return (
        <div className="w-full  mx-auto p-6 space-y-8">
            <Card className="overflow-hidden bg-white shadow-sm border-0">
                <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-medium text-blue-600 text-center">
                        Trend Research Explorer
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                    <form onSubmit={handleSearch} className="relative">
                        <div className="flex gap-3">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input
                                    type="text"
                                    placeholder="Search for trends (e.g., fashion, tech, food)..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 py-6 text-lg bg-white border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={loading}
                                className="px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg transition duration-200 rounded-full"
                            >
                                {loading ? (
                                    <div className="flex items-center gap-2">
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        <span>Searching...</span>
                                    </div>
                                ) : (
                                    'Search'
                                )}
                            </Button>
                        </div>
                    </form>

                    {error && (
                        <Alert variant="destructive" className="border-red-200 bg-red-50 rounded-lg">
                            <AlertDescription className="text-red-800">{error}</AlertDescription>
                        </Alert>
                    )}

                    <div className='flex'>


                        {redditData && Array.isArray(redditData) && redditData.length > 0 && (
                            <div className="space-y-6 flex-1 pt-4">
                                <h3 className="text-xl font-medium text-gray-800 border-b border-gray-200 pb-2">
                                    Top Reddit Posts
                                </h3>
                                <RedditPosts redditData={redditData} />
                            </div>
                        )}


                        {googleData && googleData.default?.timelineData?.length > 0 && (
                            <div className="space-y-6 flex-1 pt-4">
                                {/* <h3 className="text-xl font-medium text-gray-800 border-b border-gray-200 pb-2">
                                Google Trends Data
                            </h3> */}
                                {/* <TrendsDisplay data={googleData} /> */}
                                <TimelineGraph data={googleData} />
                            </div>
                        )}

                        {loading && (
                            <div className="text-center py-8">
                                <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600" />
                                <p className="text-gray-600 mt-2">Searching for trends...</p>
                            </div>
                        )}

                    </div>


                    {
                        // langflowData && (

                        // <div className="space-y-4">
                        //     {langflowData.map((result, index) => (
                        //         <Card key={index}>
                        //             <CardContent className="pt-6">
                        //                 <p className="text-gray-700">• {result}</p>
                        //             </CardContent>
                        //         </Card>
                        //     ))}
                        // </div>
                        // )

                        <div className="space-y-4">
                            {langflowData ? (
                                <MarkdownViewer markdownContent={langflowData} />
                            ) : null}
                        </div>
                    }
                    {langflowLoading && (
                        <div className="text-center py-8">
                            <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600" />
                            <p className="text-gray-600 mt-2">Searching for results...</p>
                        </div>)
                    }

                </CardContent>
            </Card>
        </div>
    );
};

export default ArtFinderSearch;
