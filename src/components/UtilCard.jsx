import React from 'react';
import {useNavigate} from "react-router-dom";

const UtilCard = ({header, description, title}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/utils/${title}`)
    }

    return (
        <div className="util-card" onClick={handleClick}>
            <div className="util-card__header" style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>
                {header}
            </div>
            <div className="util-card__body">
                {description}
            </div>
        </div>
    );
};

export default UtilCard;