import React from "react";
import ReactMarkdown from "react-markdown";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const MarkdownViewer = ({
    markdownContent,
    className,
    maxHeight = ""
}) => {
    return (
        <Card className={cn("w-full  mx-auto", className)}>
            <CardContent className="p-6">

                <h3 className="text-xl font-medium text-gray-800 border-b font-semibold border-gray-200 pb-2">
                    Results and Hooks
                </h3>
                <ScrollArea className={cn("rounded-md", maxHeight)}>
                    <div className="prose prose-slate dark:prose-invert max-w-none
            prose-headings:scroll-m-20
            prose-headings:mb-4
            prose-h1:text-3xl
            prose-h1:font-extrabold
            prose-h2:text-2xl
            prose-h2:font-semibold
            prose-h3:text-xl
            prose-h4:text-lg
            prose-p:leading-7
            prose-p:mb-4
            prose-blockquote:border-l-2
            prose-blockquote:border-slate-300
            prose-blockquote:pl-6
            prose-blockquote:italic
            prose-ul:my-6
            prose-ul:ml-6
            prose-ul:list-disc
            prose-ol:my-6
            prose-ol:ml-6
            prose-ol:list-decimal
            prose-li:my-2
            prose-code:rounded-md
            prose-code:bg-slate-100
            prose-code:p-1
            prose-code:text-sm
            prose-code:font-mono
            prose-pre:bg-slate-100
            prose-pre:p-4
            prose-pre:rounded-lg
            prose-img:rounded-lg
            prose-a:text-blue-600
            prose-a:underline
            hover:prose-a:text-blue-800
            dark:prose-blockquote:border-slate-700
            dark:prose-code:bg-slate-800
            dark:prose-pre:bg-slate-800
            dark:prose-a:text-blue-400
            dark:hover:prose-a:text-blue-300"
                    >
                        <ReactMarkdown>{markdownContent}</ReactMarkdown>
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
};

export default MarkdownViewer;