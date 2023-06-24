import { useState, useEffect } from "react";

function useFetch(url, options = {}) {
    const [result, setResult] = useState({
        data: [],
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

export default useFetch;