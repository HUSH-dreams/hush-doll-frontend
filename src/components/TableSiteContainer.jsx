import React from 'react';
import TableUserContainer from "./TableUserContainer";
import TableContainer from "./TableContainer";

const TableSiteContainer = () => {
    return (
        <div>
            <main style={{display: 'flex', zIndex: 1, height: 866}}>
                <aside className="main-container"
                       style={{
                           display: 'block',
                           border: '1px solid rgb(234, 201, 136)',
                           borderRadius: '10px 0 0 10px',
                           width: 360,
                           padding: 0
                       }}>
                    <div style={{
                        background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`
                    }} className="main-container-before">
                    </div>
                    <TableUserContainer />
                </aside>
                <section className="main-container" style={{
                    border: '1px solid rgb(234, 201, 136)',
                    borderLeft: 'none',
                    borderRadius: '0 10px 10px 0',
                    width: 1137,
                    padding: 0,
                    zIndex: 1
                }}>
                    <div style={{
                        background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`
                    }} className="main-container-before">
                    </div>
                    <TableContainer />
                </section>
            </main>
        </div>
    );
};

export default TableSiteContainer;