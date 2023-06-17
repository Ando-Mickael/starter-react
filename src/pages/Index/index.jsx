import React from 'react';
import './style.scss';
import useFetch from '../../hooks/useFetch';
import { Helmet } from 'react-helmet';

export default function Index() {
    const [data, loading] = useFetch("https://jsonplaceholder.typicode.com/posts");

    if (loading) {
        return (
            <p>Loading...</p>
        );
    }

    return (
        <div>
            {/* <Helmet>
                <title>Jean</title>
                <meta name="description" content="This is a description of the page" />
            </Helmet> */}

            <ul>
                {data.map(item => {
                    return (
                        <li key={item["id"]}>{item["title"]}</li>
                    )
                })}
            </ul>
        </div>
    )
}
