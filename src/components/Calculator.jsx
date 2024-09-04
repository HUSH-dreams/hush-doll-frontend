import React, {useState} from 'react';

const Calculator = () => {
    const [level, setLevel] = useState('90+');
    const [action, setAction] = useState('1');
    

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
            borderRadius: 5,
            padding: 10,
            boxShadow: '0 0 10px 5px white'
        }}>
            <h3 style={{textAlign: 'center'}}>Filling calculator</h3>
            <div style={{display: "flex", color: 'whitesmoke', fontWeight: 'bold', textAlign: 'center', marginBottom: 10}}>
                <div style={{width: 60}}>Level</div>
                <div style={{width: 100}}>Action</div>
            </div>
            <div style={{display: "flex", alignItems: 'center', textAlign: 'center'}}>
                <div style={{width: 60}}>
                    <select id="select-castle-lvl" className="castle-input select-clan"
                        style={{
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
                            width: 45,
                            margin: 'auto'
                        }}
                            value={level}
                            onChange={e => setLevel(e.target.value)}
                    >
                        <option value="1">90+</option>
                        <option value="2">75</option>
                        <option value="3">60</option>
                        <option value="4">45</option>
                        <option value="5">30</option>
                        <option value="6">15</option>
                    </select>
                </div>
                <div style={{width: 100}}>
                    <select id="select-castle-lvl" className="castle-input select-clan"
                            style={{
                                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) no-repeat center`,
                                margin: 'auto'
                            }}
                            value={action}
                            onChange={e => setAction(e.target.value)}
                    >
                        <option value="1">Залит</option>
                        <option value="2">Пожелтел</option>
                        <option value="3">Покраснел</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Calculator;