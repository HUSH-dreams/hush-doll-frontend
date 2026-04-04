import React, {useEffect} from 'react';
import TableContainer from "./TableContainer";
import '../styles/page.css'
import Aside from "./Aside";
import {useIsSmall} from "../use/IsSmall";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import TableLoader from "./TableLoader";
import {useSelector} from "react-redux";
import {selectToken, selectUser} from "../store/user/selectors";
import Chat from "./Chat";
import {useLang} from "../use/lang";
import {selectTable} from "../store/table/selectors";

const TablePage = () => {
    const [isSmall] = useIsSmall();
    const user = useSelector(selectUser);
    const token = useSelector(selectToken);
    const {texts} = useLang();
    const table = useSelector(selectTable);
    const navigate = useNavigate();
    const location = useLocation();
    const {tableName} = useParams();

    document.title = 'Таблица'

    useEffect(() => {
        if (table && !tableName && location.pathname === '/table') {
            navigate(`/table/${table.dynamic.tableName.toLowerCase().replaceAll(" ", '-').replaceAll('\\', '-').replaceAll('/', '-')}`);
        }
    },[location.pathname, table, tableName])

    return (
        <main className="page">
            {!isSmall && <div className="page__before" style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}></div>}
            {tableName && <TableLoader/>}
            <aside className="page__aside">
                <Aside/>
            </aside>
            <TableContainer/>
            <div className="chat-container">
                <div className="chat__header" style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>
                    {texts.mainChat}
                </div>
                <Chat user={user} token={token}/>
            </div>
        </main>
    );
};

export default TablePage;