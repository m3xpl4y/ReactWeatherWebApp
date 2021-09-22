import React, { useEffect, useState } from 'react';

export default function SearchInput({ locationSetter }) {
    const [location, setLocation] = useState();

    useEffect(() => {
        locationSetter(location)
    }, [locationSetter, location]);

    return (
        <div className="m-input">
            <input onChange={e => setLocation(e.target.value)} className="m-input"
            placeholder="Search Location"/>
        </div>
    )
}