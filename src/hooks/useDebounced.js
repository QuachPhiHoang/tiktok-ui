import { useEffect, useState } from 'react';

function useDebounced(value, delay) {
    const [debouncedvalue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedvalue;
}

export default useDebounced;
