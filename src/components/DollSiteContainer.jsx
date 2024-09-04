import React from 'react';
import DollUserContainer from "./DollUserContainer";
import DollContainer from "./DollContainer";
import ItemsContainer from "./ItemsContainer";
import {useParams} from "react-router-dom";
import SetDoll from "./SetDoll";

const DollSiteContainer = () => {
    let {string} = useParams();

    return (
            <main style={{display: 'flex', zIndex: 1, height: 866}}>
                {
                    string && (<SetDoll />)
                }
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
                    }} className="main-container-before"></div>
                    <DollUserContainer/>
                </aside>
                <section className="main-container"
                         style={{
                             width: 337,
                             borderTop: '1px solid rgb(234, 201, 136)',
                             borderBottom: '1px solid rgb(234, 201, 136)',
                             zIndex: 1,
                         }}>
                    <div style={{
                        background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`
                    }} className="main-container-before"></div>
                    <DollContainer/>
                </section>
                <section className="main-container"
                         style={{
                             border: '1px solid rgb(234, 201, 136)',
                             borderRadius: '0 10px 10px 0',
                             width: 800,
                             padding: 0,
                             zIndex: 1
                         }}>
                    <div style={{
                        background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`
                    }} className="main-container-before"></div>
                    <ItemsContainer/>
                </section>
            </main>
    );
};

export default DollSiteContainer;