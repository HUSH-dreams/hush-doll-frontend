import React from 'react';

const AddCastle = ({chosen, children}) => {
    return (
        <div className="table-container__table-content-add-castle"
            style={{
            color: chosen ? 'white' : 'inherit',
            borderColor: chosen ? 'white' : 'dimgrey'
        }}>
            <span style={{marginRight: 12}}>{children}</span>
            <span>{chosen ? '-' : '+'}</span>
        </div>
    );
};

export default AddCastle;