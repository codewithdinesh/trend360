import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TrendsDisplay = ({ data }) => {
    if (!data || !data.default?.timelineData?.length) {
        return (
            <Card>
                <CardContent>
                    <p className="text-gray-600">No data available to display.</p>
                </CardContent>
            </Card>
        );
    }

    const timelineData = data.default.timelineData;

    return (
        <Card className="w-full max-w-4xl mx-auto p-4">
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-600 text-center">
                    Google Trends Over Time
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left">Date</TableHead>
                            <TableHead className="text-left">Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {timelineData.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.formattedTime}</TableCell>
                                <TableCell>{item.value[0]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default TrendsDisplay;
