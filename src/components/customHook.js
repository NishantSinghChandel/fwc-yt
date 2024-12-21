import { useState, useEffect } from 'react';


const API_URL = 'https://jsonplaceholder.typicode.com/todos'
export default function useApiCall(url=API_URL) {
    const [apiData, setApiData] = useState({ data: {}, error: "", isLoading: false });


    useEffect(() => {
        setApiData({ ...apiData, isLoading: true });
        fetch(url).then(res => res.json()).then(result => {
            setApiData({ ...apiData, data: result, isLoading: false })
        }).catch(err => {
            setApiData({ ...apiData, isLoading: false, error: err });
        })

    }, []);

    return apiData;
}