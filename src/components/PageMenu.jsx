import React from 'react';
import Button from "@mui/material/Button";
import CustomLink from "./CustomLink";
import {useSelector} from "react-redux";
import {selectButtons} from "../store/lang/selectors";

const PageMenu = () => {
    const buttons = useSelector(selectButtons);

    return (
        <div style={{display: 'flex'}}>
            <CustomLink style={{margin: '0 5px 0 5px'}} to={'/doll'}>
                <Button className="button-hover">{buttons.doll}</Button>
            </CustomLink>
            <CustomLink style={{margin: '0 5px 0 5px'}} to={'/table'}>
                <Button className="button-hover">{buttons.table}</Button>
            </CustomLink>
        </div>
    );
};

export default PageMenu;