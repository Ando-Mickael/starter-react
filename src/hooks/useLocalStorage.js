import { useEffect, useState } from "react";

function useLocalStorage(key) {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : '';
    });

    useEffect(() => {
        if (value) {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            localStorage.removeItem(key);
        }
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;