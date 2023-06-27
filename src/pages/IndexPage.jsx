import React from 'react';
import { Link } from 'react-router-dom';

export default function IndexPage() {
    const routes = [
        {
            title: "Table",
            url: "/example/table"
        },
        {
            title: "Pie chart",
            url: "/example/pie"
        },
        {
            title: "Test form",
            url: "/example/form"
        },
    ];

    return (
        <ul>
            {routes.map((route, index) => {
                return (
                    <li key={index}>
                        <Link to={route.url}>{route.title}</Link>
                    </li>
                );
            })}
        </ul>
    );
}
