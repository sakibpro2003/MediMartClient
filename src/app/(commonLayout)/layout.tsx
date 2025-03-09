import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <h2>nav</h2>
            {children}
            <h2>footer</h2>

        </div>
    );
};

export default layout;