import React from 'react';
import "./About.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {
    return (
        <div className=' pt-5'>
            <div className="container about-container">

                <div >
                    <div className="pb-3">
                        <h5 style={{ color: "green" }}><strong>Hello! I’m Prince Talukder.</strong></h5>
                        <p>Junior Web Developer from Bangladesh. I completed a course on web development. I want to be a dedicated web developer. So if I get chance to work then I will surly do the job with full of my concentration and dedication</p>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-md-8'>
                            <div >
                                <h5 style={{ color: "green" }}> <strong>Personal Information</strong></h5>
                                <p>
                                    <span><span className='fw-bold'>Name:</span> Prince Talukder</span> <br />
                                    <span><span className='fw-bold'>Age:</span> 22</span>  <br />
                                    <span><span className='fw-bold'>Residence:</span> Sylhet, Bangladesh</span>  <br />
                                    <span><span className='fw-bold'>Address:</span> 07, Modina Market</span>  <br />
                                    <span><span className='fw-bold'>Phone:</span> 01709247965</span>  <br />
                                    <span><span className='fw-bold'>Email:</span> talukderprince100@gmail.com</span>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default About;