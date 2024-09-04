import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import {useDispatch, useSelector} from 'react-redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import '../styles/Doll.css';
import '../styles/UserContainer.css';
import {dollDeleteInitiate, dollDeleteOther, dollSetName, dollSetShare} from '../store/doll/actions.js';
import Button from "@mui/material/Button";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {selectButtons, selectInputs, selectLang, selectTexts} from "../store/lang/selectors";
import {useNavigate} from "react-router-dom";
import {handleSelect} from "./Dolls";

const Doll = ({doll, index, token, list}) => {
    const [anchor, setAnchor] = useState(null);
    const [display, setDisplay] = useState('none');
    const open = Boolean(anchor);
    const eng = useSelector(selectLang);
    const texts = useSelector(selectTexts);
    const inputs = useSelector(selectInputs);
    const buttons = useSelector(selectButtons);
    const id = open ? 'simple-popup' : undefined;
    const [dollPublic, setDollPublic] = useState(doll.share);
    const [name, setName] = useState('');
    const [newName, setNewName] = useState(null);
    const [dollDelete, setDollDelete] = useState(null);
    const [isCopied, setIsCopied] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let titleText;
    let degreeText;

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
        setAnchor(anchor ? null : event.currentTarget);
        setDisplay(display === 'none' ? 'block' : 'none');
        setNewName(null);
        setDollPublic(doll.share);
        setDollDelete(null);
        setName('');
    };

    const handleDelete = () => {
        dispatch(dollDeleteInitiate(token, doll.id));
        setDisplay('none');
        navigate('/doll');
    }

    const handleDeleteOther = () => {
        dispatch(dollDeleteOther(token, doll.shareString));
        setDisplay('none');
        navigate('/doll');
    }

    const handleChangeName = () => {
        setNewName(name);
    }

    const handleChangeShare = (event) => {
        if (event.target.id === 'doll-public') {
            setDollPublic('public');
        } else {
            setDollPublic('private');
        }
    };

    const handleSave = () => {
        if (doll.share !== dollPublic) {
            dispatch(dollSetShare(token, doll.id, dollPublic));
        }

        if (newName && newName !== doll.name) {
            dispatch(dollSetName(token, doll.id, newName));
        }
    }

    const handleSelectDoll = () => {
        handleSelect(dispatch, doll);
    }

    const copyTextToClipboard = async () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
    };

    return (
        <div>
            <div className="modal" style={{display: display}} onClick={handleClick}></div>
            <Paper className="doll-list-item" style={{
                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
                boxShadow: '0px 0px 7px -1px rgb(234, 201, 136)'
            }} elevation={3}
                   sx={{mb: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Stack direction="column" sx={{alignSelf: 'center', cursor: 'pointer', p: 1.5, pr: 0, width: '80%'}}
                       onClick={handleSelectDoll}>
                    <Stack direction="row" sx={{minHeight: 30}}>
                        <Typography className="text" sx={{alignSelf: 'center'}}
                                    color='rgb(234, 201, 136)'>{index + 1}.&nbsp;</Typography>
                        <Typography className="text"
                                    sx={{fontWeight: 'bold',
                                        alignSelf: 'center',
                                        mr: 1,
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis'}}
                                    color='rgb(234, 201, 136)'>{doll.name}</Typography>
                    </Stack>
                    <Stack direction="row" sx={{minHeight: 30}}>
                        <Typography className="text" sx={{alignSelf: 'center', mr: 0.5}}
                                    color='rgb(234, 201, 136)'>
                            {doll.titleLevel}{titleText} / {doll.degreeLevel}{degreeText} - </Typography>
                        {doll.professionIcon && (
                            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/${doll.professionIcon}`}
                                 style={{width: 30, height: 30, alignSelf: 'center'}}
                                 alt="profession icon"/>)}
                        <Typography className="text" sx={{alignSelf: 'center', color: 'rgb(234, 201, 136)'}}
                                    color='rgb(234, 201, 136)'>
                            {doll.professionNameEng ? ((eng && doll.professionNameEng)
                                || (!eng && doll.professionNameRu)
                            ) : ('No profession')
                            }
                        </Typography>
                    </Stack>
                </Stack>
                <Stack
                    sx={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', width: '15%'}}>
                    <IconButton className="text trash" sx={{height: 30, width: 30, cursor: 'pointer'}}
                                aria-label="delete"
                                aria-describedby={id} type="button" onClick={handleClick}>
                        {
                            list === 'dolls' ? (<MenuIcon/>)
                                : (<DeleteIcon/>)
                        }
                    </IconButton>
                </Stack>
            </Paper>
            <div style={{
                width: '84%',
                display: display,
                position: 'absolute',
                top: 138,
                right: '8%',
                zIndex: 10,
                boxShadow: '0px 0px 10px 2px white',
                borderRadius: 5
            }}>
                {
                    list === 'dolls' ? (
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{
                                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
                                padding: 10,
                                borderRadius: '5px 5px 0 0',
                                color: 'white',
                                display: 'flex',
                                justifyContent: 'space-around',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                width: '90%'
                            }}>
                                {doll.name}
                            </div>
                            <div style={{
                                backgroundColor: 'rgb(234, 201, 136)', color: 'rgb(36,33,29)', padding: 16,
                                borderRadius: '0 0 5px 5px'
                            }}>
                                {!newName ? (<div style={{display: 'flex', flexDirection: 'column'}}>
                                    <label htmlFor={"change-name-" + doll.id}>{texts.changeName}</label>
                                    <input style={{
                                        padding: 8,
                                        border: '2px solid rgb(36,33,29)',
                                        borderRadius: 5,
                                        margin: '16px 0',
                                        backgroundColor: 'inherit'
                                    }}
                                           name={"change-name-" +doll.id}
                                           id={"change-name-" + doll.id}
                                           placeholder={inputs.name}
                                           value={name}
                                           type="text"
                                           onChange={e => setName(e.target.value)}
                                           onClick={e => setName('')}
                                    />
                                    <Button className="button-hover-dark" onClick={handleChangeName}>
                                        {buttons.setName}
                                    </Button>
                                </div>) : (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-around'
                                    }}>
                                        <div style={{marginBottom: 16}}>{texts.newName} <b
                                            style={{color: 'white', fontWeight: 'bold'}}>{newName}</b></div>
                                        <Button className="button-hover-dark"
                                                onClick={e => setNewName(null)}>
                                            {buttons.cancel}
                                        </Button>
                                    </div>)
                                }
                                <div style={{
                                    display: 'flex', overflow: 'hidden',
                                    justifyContent: 'space-around', flexDirection: 'column', margin: '16px 0'
                                }}>
                                    {
                                        doll.share === 'public' && (
                                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                                <div style={{
                                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                                    marginBottom: 16
                                                }}>
                                                    <div className="share-link">
                                                        {process.env.REACT_APP_FRONTEND_URL + '/doll/' + doll.shareString}
                                                    </div>
                                                    <CopyToClipboard
                                                        text={`${process.env.REACT_APP_FRONTEND_URL}/doll/${doll.shareString}`}
                                                        onCopy={copyTextToClipboard}>
                                                        <ContentCopyIcon style={{marginLeft: 10, cursor: 'pointer'}} />
                                                    </CopyToClipboard>
                                                </div>
                                                {
                                                    isCopied && <span style={{color: 'white', marginBottom: 16}}>{texts.copied}</span>
                                                }
                                            </div>)
                                    }
                                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                        <div>
                                            <Button id="doll-private"
                                                    className={dollPublic === 'private' ? "share-toggle share-toggle-left share-toggle-selected" : "share-toggle share-toggle-left"}
                                                    onClick={handleChangeShare}>
                                                {buttons.private}
                                            </Button>
                                            <Button id="doll-public"
                                                    className={dollPublic === 'public' ? "share-toggle share-toggle-right share-toggle-selected" : "share-toggle share-toggle-right"}
                                                    onClick={handleChangeShare}>
                                                {buttons.public}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                {!dollDelete ? (<div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                                    <IconButton className="text-dark trash-dark"
                                                sx={{height: 30, width: 30, cursor: 'pointer'}}
                                                aria-label="save" type="button"
                                                onClick={handleSave}>
                                        <SaveIcon/>
                                    </IconButton>
                                    <IconButton className="text-dark trash-dark"
                                                sx={{height: 30, width: 30, cursor: 'pointer'}}
                                                aria-label="delete"
                                                aria-describedby={id} type="button" onClick={e => setDollDelete(true)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </div>) : (<div>
                                        <div>
                                            {texts.deleteDoll}
                                            <b style={{color: 'white', fontWeight: 'bold'}}>{doll.name}</b>
                                            {texts.doll}
                                        </div>
                                        <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: 16}}>
                                            <Button className="button-hover-dark"
                                                    onClick={handleDelete}>{buttons.confirm}</Button>
                                            <Button className="button-hover-dark"
                                                    onClick={handleClick}>{buttons.cancel}</Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{
                                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
                                padding: 16,
                                borderRadius: '5px 5px 0 0',
                                color: 'white',
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}>
                                <b>{doll.name}</b>
                            </div>
                            <div style={{
                                backgroundColor: 'rgb(234, 201, 136)',
                                color: 'rgb(36,33,29)',
                                padding: 16,
                                borderRadius: '0 0 5px 5px'
                            }}>
                                <div>
                                    {texts.deleteOther}
                                    <b style={{color: 'white', fontWeight: 'bold'}}>{doll.name}</b>
                                    {texts.deleteOtherFromList}
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: 16}}>
                                    <Button className="button-hover-dark"
                                            onClick={handleDeleteOther}>{buttons.confirm}</Button>
                                    <Button className="button-hover-dark"
                                            onClick={handleClick}>{buttons.cancel}</Button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Doll;