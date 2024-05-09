import React, { useEffect, useState } from 'react';

function Description({ sport_id }) {
    const [description, setDescription] = useState('');

    useEffect(() => {
        // Fetch specific sport details by sport_id
        fetch(`http://localhost:3001/api/sports/${sport_id}`)
            .then(response => response.json())
            .then(data => {
                // Assuming the data returned has a 'description' field
                console.log(data)
                setDescription(data.description);

            })
            .catch(error => console.error('Error fetching data:', error));
    }, [sport_id]);  // Dependency on sport_id to refetch when it changes

    return (
        <h1>{description || 'Loading sport description...'}</h1>
    );
}

export default Description;
