import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Projects.css"
import OneProject from './OneProject';
import { keyframes } from '@mui/styled-engine';

const Project = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch(`./data.json`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='container project'>
            <p><strong>Some Project</strong></p>
            <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                        service.map(service=> <OneProject
                        key={service.id}
                        service={service}>
                        </OneProject>)
                    }
            </div>
        </div>
    );
};

export default Project;