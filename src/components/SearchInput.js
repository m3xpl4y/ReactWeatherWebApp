import React, { useEffect, useState } from 'react';

export default function SearchInput({ locationSetter }) {
    const [location, setLocation] = useState();

    useEffect(() => {
        locationSetter(location)
    }, [locationSetter, location]);

    return (
        
        <div className="m-input" onKeyPress={e => e.key === 'Enter' && setLocation(e.target.value)}>
            <input  className="m-input"
            placeholder="Search Location"/>
        </div>
    )
}
