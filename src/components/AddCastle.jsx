import React from 'react';

const AddCastle = ({chosen, children}) => {
    return (
        <div style={{border: '1px solid', borderRadius: 6, padding: 6, width: 50,
            display: "flex", justifyContent: 'space-between',
            margin: '0 5px',
            color: chosen ? 'white' : 'inherit',
            borderColor: chosen ? 'white' : 'dimgrey'
        }}>
            <span style={{marginRight: 12}}>{children}</span>
            <span>{chosen ? '-' : '+'}</span>
        </div>
    );
};

export default AddCastle;