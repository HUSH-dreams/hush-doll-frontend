import React, {useState} from 'react';
import {useLang} from "../use/lang";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {addMessage} from "../store/error/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectToken} from "../store/user/selectors";
import Button from "@mui/material/Button";

const UtilOverlay = () => {
    const {texts} = useLang();
    const dispatch = useDispatch();
    const url = `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`
    const token = useSelector(selectToken);
    const [desc, setDesc] = useState(false);

    const copyTextToClipboard = async () => {
        dispatch(addMessage('Токен для входа в оверлей таблицы скопирован'))
    };

    return (<div className="utils-overlay__card">
        <div className="utils-overlay__header first"
             style={{background: url, backgroundRepeat: "repeat"}}>{texts.utilsOverlay}</div>
        <div className="utils-overlay__body">
            <div className="utils-overlay__overlay-container">
                <div className="utils-overlay__overlay-row">
                    {texts.tableOverlayAttention}
                </div>
                <div className="utils-overlay__overlay-row">
                    {texts.tableOverlayCopyToken}
                    <CopyToClipboard
                        text={token}
                        onCopy={copyTextToClipboard}>
                        <ContentCopyIcon className="copy-button"/>
                    </CopyToClipboard>
                </div>
                <div className="utils-overlay__overlay-row">{texts.tableOverlayFullVersion}: <a target="_blank"
                                                                                                rel="noreferrer"
                                                                                                href="https://github.com/HUSH-dreams/SphereTableOverlay/releases/download/v2.5/SphereTableOverlay-v2.5.rar">SphereTableOverlay-v2.5</a> (~50
                    Mb)
                </div>
                <div className="utils-overlay__overlay-row">{texts.tableOverlayLightVersion}*: <a target="_blank"
                                                                                                  rel="noreferrer"
                                                                                                  href="https://github.com/HUSH-dreams/SphereTableOverlay/releases/download/v2.5/SphereTableOverlayLight-v2.5.rar">SphereTableOverlayLight-v2.5</a> (~350
                    Kb)
                </div>
                <div className="utils-overlay__overlay-row"><i>*{texts.tableOverlayRequired}: <a target="_blank"
                                                                                                 rel="noreferrer"
                                                                                                 href="https://dotnet.microsoft.com/en-us/download/dotnet/8.0">https://dotnet.microsoft.com/en-us/download/dotnet/8.0</a></i>
                </div>
                <div className="utils-overlay__overlay-row column"><Button className="button secondary" onClick={() => setDesc(!desc)}>{texts.tableOverlayCheckDotnet}</Button>
                    {
                        desc && texts.tableOverlayDotnetDesc
                    }
                </div>

                {texts.tableOverlayGithub}
            </div>
            {texts.tableOverlayDescription}
            <div className="utils-overlay__overlay-container">
                <h4>{texts.tableOverlayUtils}</h4>
                <div className="utils-overlay__overlay-row useful">
                    {texts.tableOverlayForFullscreen}
                    <div className="utils-overlay__overlay-row--right">
                        <div className="utils-overlay__overlay-row"><a target="_blank" rel="noreferrer"
                                                                       href="https://github.com/HUSH-dreams/SphereTableOverlay/releases/download/v2.4/d3d9.rar">d3d9.rar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default UtilOverlay;