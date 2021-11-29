import React from 'react';
import "./About.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {
    return (
        <div className=' pt-5'>
            <div className="container about-container">

                <div className="row">
                    <div className="col-md-7 about">
                        <h5 style={{color: "green"}}><strong>Hello! I’m Prince Talukder.</strong></h5>
                        <p>Junior Web Developar from Bangladeshs. I completed a course on web development. I want to be a dedicated web developer. So if I get chance to work then I will surly do the job with full of my concentration and dedication.</p>
                    </div>
                   
                    <div className="col-md-5">
                        <h5 style={{color: "green"}}> <strong>Personal Information</strong></h5>
                        <p>
                            <span><span className='fw-bold'>Name:</span> Prince Talukder</span> <br />
                            <span><span className='fw-bold'>Age:</span> 20</span>  <br />
                            <span><span className='fw-bold'>Residence:</span> Sylhet, Bangladesh</span>  <br />
                            <span><span className='fw-bold'>Address:</span> 07, Modina Market</span>  <br />
                            <span><span className='fw-bold'>Phone:</span> 01709247965</span>  <br />
                            <span><span className='fw-bold'>Email:</span> talukderprince100@gmail.com</span> 
                        </p>

                    </div>
                </div>
                <hr />
                <div className=''>
                    <h4 style={{color: "green"}}> <strong>Skils</strong></h4>
                   <div className="row">
                       <div className="col-md-2">
                           <p><strong>Expertise:</strong></p>
                       </div>
                       <div className="col-md-10">
                       <p >
                           <span className='pe-3'>Javascript</span>
                           <span className='pe-3'>CSS3</span>
                           <span className='pe-3'>HTML5</span>
                           <span className='pe-3'>Node Js</span>
                           <span className='pe-3'>Netlify</span>
                           <span className='pe-3'>Bootstarp</span>
                           <span className='pe-3'>React</span>
                           <span className='pe-3'>Github</span>
                       </p>
                       </div>
                     
                   </div>
                   <div className="row">
                       <div className="col-md-2">
                           <p><strong>Comfortable:</strong></p>
                       </div>
                       <div className="col-md-10">
                       <p >
                           <span className='pe-3'>MongoDB</span>
                           <span className='pe-3'>FireBase</span>
                           <span className='pe-3'>Material-UI</span>
                           <span className='pe-3'>Express Js</span>
                         
                       </p>
                       </div>
                     
                   </div>
                   <div className="row">
                       <div className="col-md-2">
                           <p><strong>Tools:</strong></p>
                       </div>
                       <div className="col-md-10">
                       <p >
                           <span className='pe-3'>VS Code</span>
                           <span className='pe-3'>Git</span>
                           <span className='pe-3'>Chrome Dev Tools</span>
                          </p>
                       </div>
                     
                   </div>
                   <div className="row">
                       <div className="col-md-2">
                           <p><strong>Others:</strong></p>
                       </div>
                       <div className="col-md-10">
                       <p >
                           <span className='pe-3'>Adobe PhotoShop</span>
                           <span className='pe-3'>Adobe Illustrator</span>
                          
                          </p>
                       </div>
                     
                   </div>
                </div>
            </div>
        </div>
    );
};

export default About;