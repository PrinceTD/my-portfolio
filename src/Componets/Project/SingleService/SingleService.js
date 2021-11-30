import { Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleService = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();

    useEffect(() => {
        fetch(`https://thawing-meadow-37880.herokuapp.com/myservice/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));

    }, []);
    
    return (
        <div className='cotainer'>
            <div >
                {serviceId}
               

            </div>

        </div>
    );
};

export default SingleService;