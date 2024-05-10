import React, { useEffect, useState } from 'react';

function SportDescription({ sport_id }) {  // Renamed to avoid potential conflicts
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3001/api/sports/${sport_id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);  // Log the data to check what's being received
                setDescription(data.description);  // Set the description based on data received
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [sport_id]);  // Dependency array to trigger re-fetch when sport_id changes

    return <h1>{description || 'Loading sport description...'}</h1>;
}

export default SportDescription;  // Ensure the export matches the function name
