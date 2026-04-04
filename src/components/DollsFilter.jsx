import React from 'react';
import '../styles/dolls.css';
import BlockIcon from '@mui/icons-material/Block';

const DollsFilter = ({click, selected, unset}) => {
    return (<div className="default-dolls">
        <div
            className={selected === 'assassin' ? "selected default-dolls_img-container" : "default-dolls_img-container"}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_01`}
                 onClick={e => click(e)}
                 alt="Ассасин"
                 title="Ассасин"
                 id="default-assassin"/>
        </div>
        <div
            className={selected === 'barbarian' ? "selected default-dolls_img-container" : "default-dolls_img-container"}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_06`}
                 onClick={e => click(e)}
                 alt="Варвар"
                 title="Варвар"
                 id="default-barbarian"/>
        </div>
        <div
            className={selected === 'blacksmith' ? "selected default-dolls_img-container" : "default-dolls_img-container"}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_11`}
                 onClick={e => click(e)}
                 alt="Кузнец"
                 title="Кузнец"
                 id="default-blacksmith"/>
        </div>
        <div className={selected === 'thief' ? "selected default-dolls_img-container" : "default-dolls_img-container"}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_08`}
                 onClick={e => click(e)}
                 alt="Вор"
                 title="Вор"
                 id="default-thief"/>
        </div>

        <div className="default-dolls__separator"></div>

        <div
            className={selected === 'archmage' ? "selected default-dolls_img-container" : "default-dolls_img-container"}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_05`}
                 onClick={e => click(e)}
                 alt="Архимаг"
                 title="Архимаг"
                 id="default-archmage"/>
        </div>
        <div className={selected === 'druid' ? "selected default-dolls_img-container" : "default-dolls_img-container"}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_07`}
                 onClick={e => click(e)}
                 alt="Друид"
                 title="Друид"
                 id="default-druid"/>
        </div>
        <div
            className={selected === 'inquisitor' ? "selected default-dolls_img-container" : "default-dolls_img-container"}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_03`}
                 onClick={e => click(e)}
                 alt="Инквизитор"
                 title="Инквизитор"
                 id="default-inquisitor"/>
        </div>
        <div
            className={selected === 'necromancer' ? "selected default-dolls_img-container" : "default-dolls_img-container"}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_13`}
                 onClick={e => click(e)}
                 alt="Некромант"
                 title="Некромант"
                 id="default-necromancer"/>
        </div>
        <div
            className={selected === 'sorcerer' ? "selected default-dolls_img-container" : "default-dolls_img-container"}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_12`}
                 onClick={e => click(e)}
                 alt="Чародей"
                 title="Чародей"
                 id="default-sorcerer"/>
        </div>

        <div className="default-dolls__separator"></div>

        <div
            className={selected === 'bandier' ? "selected default-dolls_img-container" : "default-dolls_img-container"}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_14`}
                 onClick={e => click(e)}
                 alt="Бандиер"
                 title="Бандиер"
                 id="default-bandier"/>
        </div>
        <div
            className={selected === 'crusader' ? "selected default-dolls_img-container" : "default-dolls_img-container"}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_02`}
                 onClick={e => click(e)}
                 alt="Крестоносец"
                 title="Крестоносец"
                 id="default-crusader"/>
        </div>
        <div
            className={selected === 'steel-master' ? "selected default-dolls_img-container" : "default-dolls_img-container"}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_09`}
                 onClick={e => click(e)}
                 alt="Мастер стали"
                 title="Мастер стали"
                 id="default-steel-master"/>
        </div>
        <div
            className={selected === 'armorer' ? "selected default-dolls_img-container" : "default-dolls_img-container"}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_10`}
                 onClick={e => click(e)}
                 alt="Оружейник"
                 title="Оружейник"
                 id="default-armorer"/>
        </div>
        <div className={selected === 'hunter' ? "selected default-dolls_img-container" : "default-dolls_img-container"}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/sp_04`}
                 onClick={e => click(e)}
                 alt="Охотник"
                 title="Охотник"
                 id="default-hunter"/>
        </div>
        <div className="default-dolls__separator"></div>
        <div onClick={unset} className="default-dolls_img-container" title="Сбросить" style={{marginTop: 5}}>
            <BlockIcon />
        </div>
    </div>);
};

export default DollsFilter;