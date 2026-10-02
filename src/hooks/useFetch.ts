import { useState, useEffect } from "react";

type UseFetchResult<T> = {
    data: T | null
    loading: boolean
    error: string | null
}

export function useFetch<T>(url: string): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(url)
            .then(res => res.json())
            .then(json => setData(json as T))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
        
    }, [url])

    return {data, loading, error};
}

