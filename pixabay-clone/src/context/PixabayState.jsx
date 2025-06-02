import React from 'react'
import PixabayContext from './PixabayContext'
import { useEffect } from 'react';
const PixabayState = (props) => {
    const [imgData, setimgData] = useState([]);

    const apiKey = "50640814-b8e31d536bcb1ae00eaec2858";
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=yellow+flowers&image_type=photo&per_page=100`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setimgData(data.hits);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <PixabayContext.Provider value={{
            imgData
        }}>{props.children}</PixabayContext.Provider>
    );
};

export default PixabayState