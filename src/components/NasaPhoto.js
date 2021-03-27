import React from 'react';
import { useState, useEffect } from 'react';

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
               'https://api.nasa.gov/planetary/apod?api_key=dTeFyHJUROAKgPnLy6d4ZMA9aPKJWZHrQAGSxZUu' 
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
    }, []);

    if(!photoData) return <div />;
    
    return (
        <div>
            <img src={photoData.url} alt={photoData.title} />
        </div>
    );
}