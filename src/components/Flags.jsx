import React from 'react';
import ReactCountryFlag from "react-country-flag";
import {toggleLang} from "../store/lang/actions";
import {useDispatch} from "react-redux";

const Flags = ({eng}) => {
    const dispatch = useDispatch();

    const handleLangChange = (e) => {
        if (e.target.id === 'lang-ru' && eng) {
            dispatch(toggleLang());
        }
        if (e.target.id === 'lang-eng' && !eng) {
            dispatch(toggleLang());
        }
    }

    return (
        <div style={{marginTop: 10, display: 'flex', justifyContent: 'space-around', width: 90, marginRight: 10}}>
            <ReactCountryFlag style={{scale: '1.8 1.3', cursor: "pointer"}}
                              countryCode="RU"
                              svg
                              cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                              cdnSuffix="svg"
                              title="RU"
                              id="lang-ru"
                              onClick={handleLangChange}
            />
            <ReactCountryFlag style={{scale: '1.8 1.3', cursor: "pointer"}}
                              countryCode="GB"
                              svg
                              cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                              cdnSuffix="svg"
                              title="GB"
                              id="lang-eng"
                              onClick={handleLangChange}
            />
        </div>
    );
};

export default Flags;