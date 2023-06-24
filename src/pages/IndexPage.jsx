import React from 'react';
import MyTable from '../components/generalize/MyTable';

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
    
    return (
        <div>
            <MyTable columns={columns} data={data} />
        </div>
    );
}
