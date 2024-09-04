import React from "react";
import {Outlet} from 'react-router-dom';
import '../styles/Layout.css';
import PageMenu from "./PageMenu";

const Layout = () => {
    return (
        <>
            <div>
                <div style={{
                    background: `url(${process.env.REACT_APP_BACKEND_URL}/image/ilsa2) no-repeat center center fixed`,
                    backgroundSize: 'cover'
                }}>
                    <div style={{backgroundColor: 'lightbrown', height: '100vh', zIndex: 1, width: 1496, margin: 'auto'}}>
                        <header style={{height: 30}}>
                            <PageMenu/>
                        </header>
                        <Outlet/>
                        <footer style={{color: 'whitesmoke'}}>
                            Website made by <b>HUSH</b>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;