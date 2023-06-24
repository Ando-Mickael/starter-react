import React from 'react';
import MyTable from '../components/generalize/MyTable';
import { MyPieChart } from '../components/generalize/MyChart';

export default function IndexPage() {
    const columns = ["nom", "age"];
    const data = [
        {
            nom: "Ando",
            age: 21
        },
        {
            nom: "Mickael",
            age: 19
        },
        {
            nom: "Jean",
            age: 24
        },
    ];

    const labels = ['bebe', 'enfant', 'ado', 'adulte', 'vieux'];
    const obj = {
        bebe: 12,
        enfant: 19,
        ado: 3,
        adulte: 5,
        vieux: 2,
    };

    return (
        <main>
            <div className="container">
                <div className="row mb-3">
                    <div className="card">
                        <div className="card-body">
                            <MyTable columns={columns} data={data} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <MyPieChart labels={labels} obj={obj} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
