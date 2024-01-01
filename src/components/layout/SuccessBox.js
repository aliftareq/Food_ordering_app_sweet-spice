import React from 'react';

const SuccessBox = ({ children }) => {
    return (
        <div className="text-center bg-green-200 rounded-md py-2 font-semibold text-green-600 border border-green-300">
            {children}
        </div>
    );
};

export default SuccessBox;