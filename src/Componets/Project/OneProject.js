
import React from 'react';
import "./Projects.css"
import { Link } from 'react-router-dom';

const OneProject = (props) => {
    const { _id, name, imgProfile } = props.service
    return (

        <div className="col">
            <div className="card border-0 text-center">
                <img className='img-border' src={imgProfile} alt="" width="100%" />
                <div className="card-body">
                    <p className="card-title"><strong>{name}</strong>.
                        <Link to={`/project/${_id}`}>
                            <span style={{ color: "green" }}><i className="fas fa-arrow-circle-right"></i></span>
                        </Link></p>


                </div>
            </div>
        </div>

    );
};

export default OneProject;