import React, {useEffect, useRef, useState} from 'react';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {useDispatch, useSelector} from "react-redux";
import {selectLang} from "../store/lang/selectors";
import {tableDeleteTable, tableSelect} from "../store/table/actions";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import {CopyToClipboard} from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {addMessage, addNewMessage} from "../store/error/actions";
import {useLang} from "../use/lang";
import '../styles/table.css'
const Table = ({table, token, index, user, delayIndex}) => {
    const [anchor, setAnchor] = useState(null);
    const [display, setDisplay] = useState('none');
    const [tableDelete, setTableDelete] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const open = Boolean(anchor);
    const eng = useSelector(selectLang);
    const {texts, inputs, buttons} = useLang()
    const id = open ? 'simple-popup' : undefined;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [thisClass, setThisClass] = useState('');
    const url = `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`
    const tableRef = useRef(null)

    useEffect(() => {
        tableRef.current.style.animationDelay = `${delayIndex * 50}ms`;
    }, [])

    const handleClick = () => {
        setDisplay(display === 'none' ? 'flex' : 'none');
        setThisClass(thisClass === '' ? 'dropdownAnimated' : '');
        setTableDelete(false);
    };

    const handleDelete = () => {
        setTableDelete(true);
    }

    const handleDeleteCancel = () => {
        setTableDelete(false);
    }

    const handleDeleteConfirm = () => {
        dispatch(tableDeleteTable(token, {
            tableId: table.id, name: table.name
        }))

        handleClick();
    }

    let isMe = false;

    if (table.roleId === 1) {
        isMe = true;
    }

    const copyTextToClipboard = async () => {
        setIsCopied(true);
        dispatch(addMessage('Ссылка входа в таблицу скопирована'))

        setTimeout(() => setIsCopied(false), 3000);
    };

    const handleTableClick = () => {
        navigate(`/table/${table.name.toLowerCase().replaceAll(" ", '-').replaceAll('\\', '-').replaceAll('/', '-')}`)
    }

    return (<>
        <div className="modal" style={{display: display}} onClick={handleClick}>
        </div>
        <div className="table--popup"
             style={{display: display, background: url}}>
            <div className="table--popup__header">
                {table.name}
            </div>
            <div className="table--popup__body">
                <div className="table--popup__copy">
                    <div className="copy-link">
                        {process.env.REACT_APP_FRONTEND_URL + '/table/enter/' + table.shareString}
                    </div>
                    <CopyToClipboard
                        text={`${process.env.REACT_APP_FRONTEND_URL}/table/enter/${table.shareString}`}
                        onCopy={copyTextToClipboard}>
                        <ContentCopyIcon className="copy-button"/>
                    </CopyToClipboard>
                </div>
                {tableDelete && (<>
                    <div className="table--popup__delete-container">
                        <span>{texts.wantToDelete}<b>{table.name}</b>{texts.willBeDeleted}</span>
                    </div>
                    <div className="table--popup__confirmation">
                        <Button className="button dark" id="table-confirm-delete"
                                onClick={handleDeleteConfirm}>{buttons.confirm}</Button>
                        <Button className="button dark" id="table-cancel-delete"
                                onClick={handleDeleteCancel}>{buttons.cancel}</Button>
                    </div>
                </>)}
                {(isMe && !tableDelete) && (<Button className="button dark" onClick={handleDelete}>
                    <IconButton className="text-dark trash-dark"
                                aria-label="delete"
                                aria-describedby={id} type="button" onClick={() => setTableDelete(true)}>
                        <DeleteIcon/>
                    </IconButton>Delete table</Button>)}
            </div>
        </div>
        <div className="table" ref={tableRef}>
            <div className="table__list-item" style={{background: url}}>
                <div className="table__left" onClick={handleTableClick}>
                    {table.name}
                </div>
                <div className="table__right">
                    <div>
                        {eng ? table.roleEng : table.roleRu}
                    </div>
                    <IconButton className="text trash text-secondary"
                                aria-label="delete"
                                aria-describedby={id} type="button" onClick={handleClick}>
                        <MenuIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    </>);
};

export default Table;