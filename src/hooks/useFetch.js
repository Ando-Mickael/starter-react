import { useState, useEffect } from "react"

function useFetch(url, fetchData = {}) {
    const [result, setResult] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        fetch(url, fetchData)
            .then((res) => res.json())
            .then((data) => {
                setResult({
                    data: data,
                    loading: false
                })
        })
    }, [])

    return [
        result.data,
        result.loading
    ]
}

export default useFetch