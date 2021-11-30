
import React from 'react';
import TableEdu from './Table/TableEdu';

const Resume = () => {
    return (
        <div className=''>
            <h5><strong>Education</strong></h5>
            <TableEdu></TableEdu>

            <div>
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

export default Resume;