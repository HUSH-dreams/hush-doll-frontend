import React from 'react';
import Button from "@mui/material/Button";

const AddCastle = ({chosen, children, click}) => {
    return (
        <Button onClick={click}>
            {children}
        </Button>
    );
};

export default AddCastle;