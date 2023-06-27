import { useState, useEffect } from "react";

export default function useFetch(url, options = {}) {
    const [result, setResult] = useState({
        data: null,
        loading: true
    });

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((responseData) => {
                setResult({
                    data: responseData,
                    loading: false
                });
        });
    }, []);

    return [
        result.data,
        result.loading
    ];
}
