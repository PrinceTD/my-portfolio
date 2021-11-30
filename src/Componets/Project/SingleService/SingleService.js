
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleService = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();

    useEffect(() => {
        fetch(`https://thawing-meadow-37880.herokuapp.com/myservice/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
        console.log(service);

    }, []);

    return (
        <div className='cotainer'>
            <div className="text-center containe pt-2">
                <h2>
                    {service.name}
                </h2>
                <p>
                    {service.details}
                </p>


                <div className='row p-2'>
                    <div className='col-md-4'>
                        <span> <img src={service.imgProfile} class="d-block" style={{ width: "100%" }}></img></span>

                    </div>
                    <div className='col-md-4'>
                        <span> <img src={service.imgProfile} class="d-block" style={{ width: "100%" }}></img></span>
                    </div>
                    <div className='col-md-4'>
                        <span> <img src={service.imgProfile} class="d-block " style={{ width: "100%" }}></img></span>
                    </div>
                    <a style={{ textDecoration: "none", color: "blue" }} href={service.liveLink} target="_blank">
                        <Button style={{marginTop:"5px"}} variant="outlined" size="small">
                            Live Website
                        </Button>
                    </a>
                   <Link  style={{ textDecoration: "none", color: "blue" }} to="/project">
                        <Button style={{marginTop:"5px", paddingLeft:"20px", paddingRight:"20px"}} variant="contained" size="small">
                            Go back
                        </Button>
                  </Link>
                </div>


            </div>

        </div>
    );
};

export default SingleService;