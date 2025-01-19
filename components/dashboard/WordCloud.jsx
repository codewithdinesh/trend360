import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp, Filter } from 'lucide-react';

const TrendingKeywordsCloud = () => {
    const [keywords, setKeywords] = useState([]);
    const [filteredKeywords, setFilteredKeywords] = useState([]);
    const [filterValue, setFilterValue] = useState(100000); // Changed initial filter to 100k
    const [mounted, setMounted] = useState(false);
    const [inputValue, setInputValue] = useState('');


    const colorPalette = [
        '#2563EB', // blue-600
        '#DC2626', // red-600
        '#059669', // emerald-600
        '#7C3AED', // violet-600
        '#EA580C', // orange-600
        '#0891B2', // cyan-600
        '#D97706', // amber-600
        '#4F46E5', // indigo-600
        '#DB2777', // pink-600
        '#65A30D', // lime-600
        '#6D28D9', // purple-600
        '#0D9488', // teal-600
        '#9333EA', // purple-600
        '#15803D', // green-600
        '#9F1239', // rose-600
    ];

    useEffect(() => {
        setMounted(true);
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                const data = await response.json();
                setKeywords(data);
                // Initially filter for 100k+ searches
                const filtered = data.filter(k => k.value >= 100000);
                setFilteredKeywords(filtered);
            } catch (error) {
                console.error('Error loading keyword data:', error);
            }
        };
        fetchData();
    }, []);

    const getFontSize = (value) => {
        const baseSize = 14; // Increased base size
        const maxSize = 52; // Increased max size
        const minValue = Math.min(...keywords.map(k => k.value));
        const maxValue = Math.max(...keywords.map(k => k.value));

        const size = baseSize + (value - minValue) * (maxSize - baseSize) / (maxValue - minValue);
        return Math.min(Math.max(size, baseSize), maxSize);
    };


    const getColor = (index, value) => {
        // Use modulo to cycle through colors
        const baseColor = colorPalette[index % colorPalette.length];
        // Adjust opacity based on search volume to create variation
        const maxValue = Math.max(...keywords.map(k => k.value));
        const opacity = 0.7 + (value / maxValue) * 0.3; // Opacity between 0.7 and 1.0
        return baseColor;
    };

    // Handle filter change
    const handleFilterChange = (value) => {
        setFilterValue(value);
        const filtered = keywords.filter(k => k.value >= value);
        setFilteredKeywords(filtered);
    };

    if (!mounted) {
        return (
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="text-xl font-bold">Loading Trending Keywords...</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="w-full h-[600px] bg-gray-100 animate-pulse rounded-lg"></div>
                </CardContent>
            </Card>
        );
    }

    // Sort keywords by value for better visualization
    const sortedKeywords = [...filteredKeywords].sort((a, b) => b.value - a.value);

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle className="text-xl font-bold">Trending Keywords</CardTitle>
                    <p className="text-sm text-gray-500">
                        Showing {filteredKeywords.length} keywords with {filterValue.toLocaleString()}+ searches
                    </p>
                </div>
                <div className="flex items-center space-x-2">

                    {/* Search Input */}
                    <input
                        type="text"
                        className="p-2 border rounded-md"
                        placeholder="Search keyword..."
                        value={inputValue}
                        onSubmit={(e) => {
                            e.preventDefault()
                            const filtered = keywords.filter(k => k.text.toLowerCase().includes(inputValue.toLowerCase()));
                            setFilteredKeywords(filtered);
                        }
                        }
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Filter className="h-4 w-4 text-gray-500" />
                    <select
                        className="p-2 border rounded-md"
                        value={filterValue}
                        onChange={(e) => handleFilterChange(Number(e.target.value))}
                    >
                        <option value={0}>All Keywords</option>
                        <option value={100000}>100K+ searches</option>
                        <option value={500000}>500K+ searches</option>
                        <option value={1000000}>1M+ searches</option>
                        <option value={2000000}>2M+ searches</option>
                    </select>
                </div>
            </CardHeader>
            <CardContent>
                <div className="relative w-full h-[600px] bg-gray-50 rounded-lg p-4">
                    <div
                        className="absolute inset-0 flex flex-wrap justify-center items-center p-8 gap-4 overflow-auto"
                        style={{ maxHeight: '100%' }}
                    >
                        {sortedKeywords.map((keyword, index) => (
                            <div
                                key={index}
                                className="transform hover:scale-110 transition-transform cursor-pointer select-none hover:shadow-lg rounded-md px-3 py-1"
                                style={{
                                    fontSize: `${getFontSize(keyword.value)}px`,
                                    color: getColor(index, keyword.value),
                                    backgroundColor: `${getColor(index, keyword.value)}15`,
                                    border: `1px solid ${getColor(index, keyword.value)}30`,
                                    whiteSpace: 'nowrap'
                                }}
                                title={`${keyword.text}: ${keyword.value.toLocaleString()} searches`}
                            >
                                {keyword.text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Volume Range Indicators */}
                <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        <span>Search Volume Ranges:</span>
                    </div>
                    <span className="px-2 py-1 bg-gray-100 rounded">
                        2M+: {keywords.filter(k => k.value >= 2000000).length} keywords
                    </span>
                    <span className="px-2 py-1 bg-gray-100 rounded">
                        1M+: {keywords.filter(k => k.value >= 1000000).length} keywords
                    </span>
                    <span className="px-2 py-1 bg-gray-100 rounded">
                        500K+: {keywords.filter(k => k.value >= 500000).length} keywords
                    </span>
                    <span className="px-2 py-1 bg-gray-100 rounded">
                        100K+: {keywords.filter(k => k.value >= 100000).length} keywords
                    </span>
                </div>
            </CardContent>
        </Card>
    );
};

export default TrendingKeywordsCloud;