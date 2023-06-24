import React from 'react';

export default function MyTable({ columns, data }) {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        {columns.map((column, index) => {
                            return (
                                <th key={index}>{column}</th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index1) => {
                        return (
                            <tr key={index1}>
                                {columns.map((column, index2) => {
                                    return (
                                        <td key={index2}>{row[column]}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
