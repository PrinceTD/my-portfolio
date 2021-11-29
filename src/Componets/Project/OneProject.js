import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const OneProject = (props) => {
    const { name, imgProfile } = props.service
    return (

        <div class="col">
            <div class="card">
                <img src={imgProfile} alt="" width="100%" />
                <div class="card-body">
                    <p class="card-title">{name}</p>
                    <Link>
                    <Button variant="outlined" size="small">
         Details
        </Button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default OneProject;