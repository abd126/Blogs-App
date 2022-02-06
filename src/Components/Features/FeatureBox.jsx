import React from 'react';

function FeatureBox({Text , icon}) {
    return (
        <div className='Features-Box'>
            <i> {icon} </i>
            <p>{Text}</p>
        </div>
    );
}

export default FeatureBox;
