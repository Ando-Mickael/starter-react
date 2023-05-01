import React from 'react'
import useAxios from '../../hooks/useAxios'

export default function Index() {
    const [data, loading] = useAxios("https://jsonplaceholder.typicode.com/posts")

    if (loading) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <div>
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
