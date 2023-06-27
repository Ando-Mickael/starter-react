import React from 'react';
import { MyPieChart } from '../components/generalize/MyChart';

export default function PieChart() {
    const labels = ['bebe', 'enfant', 'ado', 'adulte', 'vieux'];
    const obj = {
        bebe: 12,
        enfant: 19,
        ado: 3,
        adulte: 5,
        vieux: 2,
    };
    
    return (
        <div>
            <MyPieChart labels={labels} obj={obj} />
        </div>
    );
}
