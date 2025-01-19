import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Spline from '@splinetool/react-spline'

const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-6xl">

                <div className='text-center flex justify-center'>



                    <div className="text-center">

                        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-800 text-transparent bg-clip-text">
                            Revolutionize Your Ad Research with ART Finder
                        </h1>
                        <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
                            Streamline ad creation with automated research, actionable insights, and user-friendly dashboards designed to optimize your marketing strategies.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/dashboard">
                                <Button
                                    size="lg"
                                    className="bg-purple-600 hover:bg-purple-700 text-white rounded-full"
                                >
                                    Try Demo
                                </Button>
                            </Link>

                            <Link href="https://youtu.be/yl1DD-5g7yA">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full"
                                >
                                    Watch Tutorial
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
