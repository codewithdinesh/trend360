import React from 'react'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Spline from '@splinetool/react-spline';

const ArtFinderFeatures = () => {
    return (
        <section id="features" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                    Key Features of ART Finder
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Comprehensive Research Automation",
                            description: "Scrapes data from blogs, forums, social media, and app reviews. Analyzes YouTube videos and competitor ads to identify trends, pain points, and effective solutions."
                        },
                        {
                            title: "Actionable Insights Generation",
                            description: "Summarizes key triggers and user problems. Suggests best-performing hooks, CTAs, and solutions tailored to the topic and audience."
                        },
                        {
                            title: "Reference Dashboard",
                            description: "Provides direct links to scraped YouTube videos and competitor ads for easy validation and inspiration. Visualizes insights with graphs, word clouds, and sentiment analysis."
                        },
                        {
                            title: "User-Centric Interface",
                            description: "Simple input fields for topics and brand guidelines. Intuitive dashboard showcasing insights and recommendations at a glance."
                        },
                    ].map((feature, index) => (
                        <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow" >
                            <CardHeader>
                                <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>




            </div>
        </section>
    )
}

export default ArtFinderFeatures
