import { useState, useEffect } from "react"
import axios from "axios"

function useAxios(url) {
    const [result, setResult] = useState({
        data: [],
        loading: true
    })

    async function getData(url) {
        const response = await axios.get(url)
        setResult({
            data: response.data,
            loading: false
        })
    }

    useEffect(() => {
        getData(url)
    }, [])

    return [
        result.data,
        result.loading
    ]
}

export default useAxios