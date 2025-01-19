import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const TimelineGraph = ({ data }) => {
    if (!data || !data.default?.timelineData?.length) {
        return <p className="text-gray-600">No data available to display.</p>;
    }

    const timelineData = data.default.timelineData;

    // Prepare data for the chart
    const labels = timelineData.map((item) => item.formattedTime);
    const values = timelineData.map((item) => item.value[0]);

    const chartData = {
        labels,
        datasets: [
            {
                label: "Interest Over Time",
                data: values,
                borderColor: "rgba(59, 130, 246, 0.8)", // Blue color
                backgroundColor: "rgba(59, 130, 246, 0.3)", // Translucent blue fill
                fill: true,
                tension: 0.4, // Smooth curve
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
            tooltip: {
                mode: "index",
                intersect: false,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Date",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Value",
                },
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <h2 className="text-xl font-semibold text-blue-600 text-center mb-6">
                Google Trends Over Time
            </h2>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default TimelineGraph;
