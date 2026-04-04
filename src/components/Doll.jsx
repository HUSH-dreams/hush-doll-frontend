import React, {useEffect, useRef, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import {useDispatch, useSelector} from 'react-redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import '../styles/UserContainer.css';
import '../styles/doll.css';
import {
    dollDeleteInitiate,
    dollDeleteOther,
    dollSetName,
    dollSetShare,
    loadDollByRouteName,
    dollDetailsInitiate
} from '../store/doll/actions.js';
import {dollDetailsInitiate as rightDollDetailsInitiate,
    dollSetDollName as rightDollSetDollName,
    dollsInitiate as rightDollsInitiate,
    selectDoll as rightSelectDoll
} from '../store/rightDoll/actions.js';

import Button from "@mui/material/Button";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {selectLang} from "../store/lang/selectors";
import {useNavigate} from "react-router-dom";
import {handleSelect} from "./Dolls";
import {addMessage, addNewMessage} from "../store/error/actions";
import {useLang} from "../use/lang";
import {selectDollName} from "../store/doll/selectors";

const Doll = ({doll, index, token, list, delayIndex, onSelect, isDefault = false, isUtils = false, setUtils = null, side = ''}) => {
    const [anchor, setAnchor] = useState(null);
    const [display, setDisplay] = useState('none');
    const open = Boolean(anchor);
    const eng = useSelector(selectLang);
    const {texts, inputs, buttons} = useLang()
    const id = open ? 'simple-popup' : undefined;
    const [dollPublic, setDollPublic] = useState(doll.share);
    const [name, setName] = useState('');
    const [newName, setNewName] = useState(null);
    const [dollDelete, setDollDelete] = useState(null);
    const selectedName = useSelector(selectDollName);
    const url = `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`
    const url2 = `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`
    const dollRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let titleText;
    let degreeText;

    useEffect(() => {
        dollRef.current.style.animationDelay = `${delayIndex * 50}ms`;
    },[])

    switch (doll.titleGreatness) {
        case 1:
            titleText = eng ? '' : '';
            break;
        case 2:
            titleText = eng ? 'gt' : 'в';
            break;
        case 3:
            titleText = eng ? 'gst' : 'вв';
            break;
        case 4:
            titleText = eng ? 'leg' : 'л';
            break;
        default:
            break;
    }

    switch (doll.degreeGreatness) {
        case 1:
            degreeText = eng ? '' : '';
            break;
        case 2:
            degreeText = eng ? 'gt' : 'в';
            break;
        case 3:
            degreeText = eng ? 'gst' : 'вв';
            break;
        case 4:
            degreeText = eng ? 'leg' : 'л';
            break;
        default:
            break;
    }

    const handleClick = (event) => {
        event.stopPropagation()
        setAnchor(anchor ? null : event.currentTarget);
        setDisplay(display === 'none' ? 'block' : 'none');
        setNewName(null);
        setDollPublic(doll.share);
        setDollDelete(null);
        setName('');
    };

    const handleDelete = () => {
        dispatch(dollDeleteInitiate(token, doll.id, doll.name));
        setDisplay('none');
        navigate('/doll');
    }

    const handleDeleteOther = () => {
        dispatch(dollDeleteOther(token, doll.shareString, doll.name));
        setDisplay('none');
        navigate('/doll');
    }

    const handleChangeName = () => {
        setNewName(name);
    }

    const handleChangeShare = (event) => {
        if (event.target.id === 'doll-public') {
            setDollPublic(true);
        } else {
            setDollPublic(false);
        }
    };

    const handleSave = () => {
        if (doll.share !== dollPublic) {
            dispatch(dollSetShare(token, doll.id, dollPublic, doll.name));
        }

        if (newName && newName !== doll.name) {
            dispatch(dollSetName(token, doll.id, newName, doll.name));
        }
    }

    const handleSelectDoll = () => {
        const string = doll.name.replaceAll(" ", "-").replaceAll('\\', '-').replaceAll('/', '-').replaceAll('\\', '-').toLowerCase();
        const normalizedName = selectedName.replaceAll(" ", "-").replaceAll('\\', '-').replaceAll('/', '-').replaceAll('\\', '-').toLowerCase();

        if (string === normalizedName && !isUtils) {
            return;
        }

        if (isUtils) {
            if (side === 'right') {
                if (isDefault) {
                    dispatch(rightDollDetailsInitiate(token, doll.id, 'default/'));
                } else {
                    dispatch(rightDollDetailsInitiate(token, doll.id));
                }

            } else {
                if (isDefault) {
                    dispatch(dollDetailsInitiate(token, doll.id, 'default/'));
                } else {
                    dispatch(dollDetailsInitiate(token, doll.id));
                }

            }

            setUtils(string);

            return;
        }

        if (list === 'dolls') {
            navigate(`/doll/my/${string}`);
        } else if (list === 'other-dolls') {
            navigate(`/doll/shared/${string}`);
        } else if (list === 'default-dolls') {
            navigate(`/doll/default/${string}`);
        }
    }

    const copyTextToClipboard = async () => {
        dispatch(addMessage('Ссылка для доступа к кукле скопирована'))
    };

    return (<>
            <div className="modal" style={{display: display}} onClick={handleClick}></div>
            <div className="doll" ref={dollRef} style={{
                background: url2
            }} onClick={handleSelectDoll}>
                <div className={isDefault ? "doll__left default" : "doll__left"}>
                    <span><b>{doll.name}</b></span>
                    <div>{doll.titleLevel}{titleText} / {doll.degreeLevel}{degreeText}
                        {doll.professionIcon && (<>&nbsp;-<img src={`${process.env.REACT_APP_BACKEND_URL}/image/${doll.professionIcon}`}
                                                                     alt="profession icon" /></>
                            )}
                            <b>{doll.professionNameEng &&
                                ((eng && doll.professionNameEng) || (!eng && doll.professionNameRu))}</b>
                        </div>
                </div>
                {
                    !isDefault && <div className="doll__right">
                        <IconButton className="text trash" sx={{height: 30, width: 30, cursor: 'pointer'}}
                                    aria-label="delete"
                                    aria-describedby={id} type="button" onClick={handleClick}>
                            {list === 'dolls' ? (<MenuIcon/>) : (<DeleteIcon/>)}
                        </IconButton>
                    </div>
                }
            </div>
            {list !== 'default-dolls' && <div className="doll--popup" style={{display: display}}>
                {list === 'dolls' ? (<div className="doll--owner">
                    <div className="doll--owner__header"
                         style={{
                             background: url,
                         }}>
                        {doll.name}
                    </div>
                    <div className="doll--owner__body">
                        {!newName ? (<>
                            <label htmlFor={"change-name-" + doll.id}>{texts.changeName}</label>
                            <input className="doll--owner__name-input"
                                   name={"change-name-" + doll.id}
                                   id={"change-name-" + doll.id}
                                   placeholder={inputs.name}
                                   value={name}
                                   type="text"
                                   onChange={e => setName(e.target.value)}
                                   onClick={e => setName('')}
                            />
                            <Button className="button" onClick={handleChangeName}>
                                {buttons.setName}
                            </Button>
                        </>) : (<>
                            <div className="doll--owner__new-name">{texts.newName}
                                <b>{newName}</b>
                            </div>
                            <Button className="button"
                                    onClick={() => setNewName(null)}>
                                {buttons.cancel}
                            </Button>
                        </>)}
                        <div className="doll--owner__bottom">
                            {doll.share && (<>
                                <div className="doll--popup__copy">
                                    <div className="copy-link">
                                        {process.env.REACT_APP_FRONTEND_URL + '/doll/' + doll.shareString}
                                    </div>
                                    <CopyToClipboard
                                        text={`${process.env.REACT_APP_FRONTEND_URL}/doll/${doll.shareString}`}
                                        onCopy={copyTextToClipboard}>
                                        <ContentCopyIcon className="copy-button"/>
                                    </CopyToClipboard>
                                </div>
                            </>)}
                            <div className="doll--owner__privacy">
                                <Button id="doll-private"
                                        className={!dollPublic ? "share-toggle share-toggle-left share-toggle-selected" : "share-toggle share-toggle-left"}
                                        onClick={handleChangeShare}>
                                    {buttons.private}
                                </Button>
                                <Button id="doll-public"
                                        className={dollPublic ? "share-toggle share-toggle-right share-toggle-selected" : "share-toggle share-toggle-right"}
                                        onClick={handleChangeShare}>
                                    {buttons.public}
                                </Button>
                            </div>
                        </div>
                        {!dollDelete ? (<div className="doll--owner__actions">
                            <IconButton className="text-dark trash-dark"
                                        aria-label="save" type="button"
                                        onClick={handleSave}>
                                <SaveIcon/>
                            </IconButton>
                            <IconButton className="text-dark trash-dark"
                                        aria-label="delete"
                                        aria-describedby={id} type="button" onClick={e => setDollDelete(true)}>
                                <DeleteIcon/>
                            </IconButton>
                        </div>) : (<>
                            <div className="doll--owner__doll-name">
                                {texts.deleteDoll}
                                <b className="doll--owner__doll-name">{doll.name}</b>
                                {texts.doll}
                            </div>
                            <div className="doll--owner__actions">
                                <Button className="button"
                                        onClick={handleDelete}>{buttons.confirm}</Button>
                                <Button className="button"
                                        onClick={handleClick}>{buttons.cancel}</Button>
                            </div>
                        </>)}
                    </div>
                </div>) : (<div className="doll--not-owner">
                    <div className="doll--not-owner__header"
                         style={{background: url}}>
                        <b>{doll.name}</b>
                    </div>
                    <div className="doll--owner__body">
                        <div className="doll--owner__doll-name">
                            {texts.deleteOther}
                            <b className="doll--owner__doll-name">{doll.name}</b>
                            {texts.deleteOtherFromList}
                        </div>
                        <div className="doll--owner__actions">
                            <Button className="button"
                                    onClick={handleDeleteOther}>{buttons.confirm}</Button>
                            <Button className="button"
                                    onClick={handleClick}>{buttons.cancel}</Button>
                        </div>
                    </div>

                </div>)}
            </div>}
        </>);
};

export default Doll;