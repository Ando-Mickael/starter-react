import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import randomColor from 'randomcolor';

ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend);

export function MyPieChart({ labels, obj }) {
    const data = {
        labels: labels,
        datasets: [
            {
                data: Object.values(obj),
                backgroundColor: randomColor({ count: Object.keys(obj).length }),
                borderColor: randomColor({ count: Object.keys(obj).length }),
                borderWidth: 1,
            },
        ],
    };

    return (
        <Pie data={data} />
    );
};

