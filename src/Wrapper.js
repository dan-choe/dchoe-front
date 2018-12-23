import React from 'react';

const Wrapper = props => {

    // console.log(props);

    return (
        <div>
            Wrapper Display {props.lat}
            <div>
                {props.children}
            </div>
        </div>
        
    );
};

export default Wrapper;