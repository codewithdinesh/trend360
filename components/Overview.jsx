import React from 'react'
import { BarChart3, Brain, Gauge } from 'lucide-react';

const Overview = () => {
    return (
        <section id="overview" className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">
                            What is Trend360?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Trend360 is ART Finder an intelligent ad research tool that automates data collection and analysis to help marketers create high-performing, user-centric ads. By leveraging AI and multiple data sources, ART Finder provides actionable insights to optimize ad content and strategies.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-2 rounded-lg">
                                    <BarChart3 className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Automated Research</h3>
                                    <p className="text-gray-600">Scrapes and analyzes data from blogs, forums, social media, and more.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-2 rounded-lg">
                                    <Brain className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">AI-Driven Insights</h3>
                                    <p className="text-gray-600">Generates recommendations tailored to your brand and audience.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-2 rounded-lg">
                                    <Gauge className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Insightful Dashboards</h3>
                                    <p className="text-gray-600">Visualize research findings with easy-to-understand graphs and sentiment analysis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-2 rounded-2xl shadow-lg">
                        <img
                            src="/overview.png"
                            alt="ART Finder Dashboard Preview"
                            className="rounded-lg"
                        ></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview
