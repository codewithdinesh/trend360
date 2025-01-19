import React from 'react';
import { ArrowBigUp, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const RedditPosts = ({ redditData }) => {
    // Function to format upvote numbers
    const formatUpvotes = (num) => {
        if (num >= 1000) {
            return `${(num / 1000).toFixed(1)}k`;
        }
        return num;
    };

    return (
        <div className="w-full border rounded-lg bg-gray-50">
            <div className="max-h-[600px] overflow-y-auto pr-2 space-y-4 p-4 custom-scrollbar">
                {redditData.map((post, index) => (
                    <Card
                        key={index}
                        className="bg-white hover:shadow-md transition-all duration-200 border-gray-100"
                    >
                        <CardContent className="p-4">
                            <div className="flex gap-4">
                                {/* Upvotes section */}
                                <div className="flex flex-col items-center min-w-[60px] pt-2">
                                    <ArrowBigUp className="w-6 h-6 text-blue-600" />
                                    <span className="text-sm font-medium text-gray-700">
                                        {formatUpvotes(post.upvotes)}
                                    </span>
                                </div>

                                {/* Content section */}
                                <a
                                    href={`https://reddit.com/u/${post.user}`}
                                    className="flex-1 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-medium text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </h3>

                                        {post.content && post.content !== "No text content" && (
                                            <div className="text-gray-600 text-sm bg-gray-50 p-3 rounded-lg max-h-24 overflow-y-auto">
                                                {post.content}
                                            </div>
                                        )}
                                    </div>
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

// Add this CSS to your global styles or as a style tag
const CustomScrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #ccd0d5;
    border-radius: 4px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #bec3c9;
  }
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.innerText = CustomScrollbarStyles;
    document.head.appendChild(styleSheet);
}

export default RedditPosts;