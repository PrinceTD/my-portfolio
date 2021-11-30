
import React from 'react';
import TableEdu from './Table/TableEdu';

const Resume = () => {
    return (
        <div className='container'>
            <h5><strong>Education</strong></h5>
            <TableEdu></TableEdu>

            <div>
            <h5><strong>Language</strong></h5>
            <span>
                <p>
                    Bangla and English
                </p>
            </span>
            </div>
        </div>
    );
};

export default Resume;