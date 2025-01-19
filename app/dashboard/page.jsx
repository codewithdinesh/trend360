"use client";
import React, { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    ResponsiveContainer,
    BarChart,
    LineChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import {
    Flame,
    Target,
    TrendingUp,
    MessageCircle,
    Youtube,
    Share2,
    AlertCircle
} from 'lucide-react';
import TrendingKeywordsCloud from '@/components/dashboard/WordCloud';
import ArtFinderSearch from '@/components/dashboard/searchInput';

const Dashboard = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    const sentimentData = [
        { name: 'Positive', value: 65 },
        { name: 'Neutral', value: 25 },
        { name: 'Negative', value: 10 },
    ];

    const trendData = [
        { month: 'Jan', mentions: 45, engagement: 65 },
        { month: 'Feb', mentions: 52, engagement: 72 },
        { month: 'Mar', mentions: 58, engagement: 80 },
        { month: 'Apr', mentions: 63, engagement: 85 },
    ];

    const [searchQuery, setSearchQuery] = useState('');


    if (!mounted) {
        return (
            <div className="p-6 space-y-6 bg-gray-50">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">Loading...</h1>
                </div>
                <div className="w-full h-96 bg-gray-100 animate-pulse rounded-lg" />
            </div>
        );
    }

    return (
        <div className="p-6 space-y-6 bg-gray-50">
            {/* Header Section */}
            <div className="space-y-2 border-b-2 border-gray-200 pb-4">
                <h1 className="text-3xl font-bold">Finder Dashboard</h1>
                {/* <p className="text-gray-500">Automated Research and Trigger Analysis</p> */}
            </div>

            <ArtFinderSearch searchQ={""} />

            <TrendingKeywordsCloud />

            {/* Main Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Pain Points Identified
                        </CardTitle>
                        <AlertCircle className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">247</div>
                        <p className="text-xs text-gray-500">+12% from last month</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Popular Triggers
                        </CardTitle>
                        <Flame className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">89</div>
                        <p className="text-xs text-gray-500">Active conversion triggers</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Competitor Insights
                        </CardTitle>
                        <Target className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">156</div>
                        <p className="text-xs text-gray-500">Analyzed ad campaigns</p>
                    </CardContent>
                </Card>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="insights" className="w-full">
                <TabsList>
                    <TabsTrigger value="insights">Key Insights</TabsTrigger>
                    <TabsTrigger value="trends">Trends</TabsTrigger>
                    <TabsTrigger value="competitors">Competitor Analysis</TabsTrigger>
                </TabsList>

                <TabsContent value="insights" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Pain Points & Triggers</CardTitle>
                            <CardDescription>Most mentioned user problems and effective triggers</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={sentimentData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="value" fill="#8884d8" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="trends" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Trend Analysis</CardTitle>
                            <CardDescription>Monthly mentions and engagement trends</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={trendData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="mentions"
                                            stroke="#8884d8"
                                            isAnimationActive={false}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="engagement"
                                            stroke="#82ca9d"
                                            isAnimationActive={false}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="competitors" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Top Performing Hooks</CardTitle>
                                <CardDescription>Most effective competitor hooks</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center space-x-2">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                                <TrendingUp className="h-4 w-4 text-blue-500" />
                                            </div>
                                            <div>
                                                <p className="font-medium">Hook Example {i}</p>
                                                <p className="text-sm text-gray-500">Engagement rate: {85 - i * 5}%</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Content Distribution</CardTitle>
                                <CardDescription>Popular content formats</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Youtube className="h-4 w-4 text-red-500" />
                                            <span>Video Content</span>
                                        </div>
                                        <span className="font-bold">45%</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <MessageCircle className="h-4 w-4 text-green-500" />
                                            <span>Social Posts</span>
                                        </div>
                                        <span className="font-bold">35%</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Share2 className="h-4 w-4 text-blue-500" />
                                            <span>Other Formats</span>
                                        </div>
                                        <span className="font-bold">20%</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Dashboard;