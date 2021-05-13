import React from 'react';
import Filters from './Filters';
import TotalSales from './TotalSales';

const Resume = () => {
    return (
        <div className="Resume container-md mt-4">
            <div className="row">
                <div className="col-md-5">
                    <TotalSales/>
                </div>
                <div className="col-md-7">
                    <Filters/>
                </div>
            </div>
        </div>
    )
}

export default Resume
