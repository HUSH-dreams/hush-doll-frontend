import React, {useEffect} from 'react';
import Item from './Item';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles/Items.css';
import {selectPrefix} from '../store/items/selectors';
import {setPrefix, unsetPrefix} from '../store/items/actions';
import {useDispatch, useSelector} from 'react-redux';
import {selectButtons, selectLang} from "../store/lang/selectors";

function HandleOthers({viewItems, eng}) {
    const othersNames = [];

    if (eng) {
        viewItems.forEach(item => {
            if (!othersNames.includes(item.typeNameEng)) {
                othersNames.push(item.typeNameEng);
            }
        })
    } else {
        viewItems.forEach(item => {
            if (!othersNames.includes(item.typeNameRu)) {
                othersNames.push(item.typeNameRu);
            }
        })
    }

    return (<div style={{display: 'flex'}}>
        <div style={{display: 'flex', flexDirection: 'column', marginRight: 16, marginLeft: 16}}>
            {othersNames.map(othersName => {
                return <div key={othersName} className="numbers numbers-other">
                    {othersName}
                </div>
            })}
        </div>
        <div style={{marginTop: 3}}>
            {othersNames.map(othersName => (<div key={othersName} style={{display: 'flex'}}>
                {viewItems.map(item => (eng ? (item.typeNameEng === othersName) : (item.typeNameRu === othersName)) && (
                    <div className="items-item-slot contains-item" key={item.id} style={{
                        background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                    }}>
                        <Item key={item.id + Math.random()} item={item}/>
                    </div>))}
            </div>))}
        </div>
    </div>)
}

function HandleCrystals({viewItems}) {
    const crystalNames = [];

    viewItems.forEach(item => {
        const words = item.nameEng.split(" ");
        const lastWord = words[words.length - 1];

        if (!crystalNames.includes(lastWord)) {
            crystalNames.push(lastWord);
        }
    })

    return (<div style={{display: 'flex'}}>
        <Stack style={{height: 585, display: 'flex', flexDirection: 'column', marginRight: 16, marginLeft: 16}}>
            <div className="numbers numbers-36">
                15
            </div>
            <div className="numbers numbers-36">
                30
            </div>
            <div className="numbers numbers-36">
                45
            </div>
            <div className="numbers numbers-36">
                60
            </div>
            <div className="numbers numbers-36">
                75
            </div>
            <div className="numbers numbers-36" style={{marginBottom: 38}}>
                90
            </div>
            <div className="numbers numbers-36">
                Old
            </div>
        </Stack>
        <div style={{display: 'flex', marginRight: 16, marginTop: 2}}>
            <div style={{display: 'flex', marginRight: 16}}>
                {crystalNames.map(crystalName => {
                    const thisItems = [];

                    viewItems.forEach(item => {
                        const itemName = item.nameEng;

                        if (itemName.includes(crystalName)) {
                            thisItems.push(item);
                        }
                    })

                    switch (crystalName) {
                        case 'power':
                            thisItems.sort((a, b) => a.givesPd - b.givesPd);
                            break;
                        case 'stability':
                            thisItems.sort((a, b) => a.givesPa - b.givesPa);
                            break;
                        case 'reflection':
                            thisItems.sort((a, b) => a.givesMa - b.givesMa);
                            break;
                        case 'energy':
                            thisItems.sort((a, b) => a.givesMd - b.givesMd);
                            break;
                    }

                    return (<div key={crystalName + Math.random()} style={{flexDirection: 'column'}}>
                        {thisItems.map((item, index) => (<div key={item.id} className="items-item-slot contains-item"
                                                              style={{
                                                                  marginBottom: index === 5 ? 40 : 0,
                                                                  background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`

                                                              }}>
                            <Item item={item}/>
                        </div>))}
                    </div>)
                })}
            </div>
        </div>
    </div>)
}

function HandlePowder({viewItems}) {
    const powderNames = [];

    viewItems.forEach(item => {
        if (!powderNames.includes(item.nameEng)) {
            powderNames.push(item.nameEng);
        }
    })

    return (<div style={{display: 'flex'}}>
        <Stack style={{height: 585, display: 'flex', flexDirection: 'column', marginRight: 16, marginLeft: 16}}>
            <div className="numbers numbers-38">
                I
            </div>
            <div className="numbers numbers-38">
                II
            </div>
            <div className="numbers numbers-38">
                III
            </div>
            <div className="numbers numbers-38">
                IV
            </div>
            <div className="numbers numbers-38">
                V
            </div>
            <div className="numbers numbers-38">
                VI
            </div>
            <div className="numbers numbers-38">
                VII
            </div>
            <div className="numbers numbers-38">
                VIII
            </div>
            <div className="numbers numbers-38">
                IX
            </div>
            <div className="numbers numbers-38">
                X
            </div>
            <div className="numbers numbers-38">
                XI
            </div>
            <div className="numbers numbers-38">
                XII
            </div>
            <div className="numbers numbers-38">
                XIII
            </div>
            <div className="numbers numbers-38">
                XIV
            </div>
            <div className="numbers numbers-38">
                XV
            </div>
        </Stack>
        <div style={{display: 'flex', marginRight: 16, marginTop: 3}}>
            {powderNames.map(powderName => {
                const thisItems = [];

                viewItems.map(item => {
                    if (powderName === item.nameEng) {
                        thisItems.push(item);
                    }
                })

                const numbers = [];

                thisItems.forEach(item => {
                    if (!numbers.includes(item.level)) {
                        numbers.push(item.level);
                    }
                });


                for (let i = 1; i < 15; i++) {
                    if (!numbers.includes(i)) {
                        thisItems.push({level: i})
                    }
                }

                thisItems.sort((a, b) => a.level - b.level);

                return <div key={powderName + Math.random()} style={{
                    display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxHeight: 585
                }}>
                    {thisItems.map(item => (('id' in item) ? (
                        <div className="items-item-slot contains-item" key={item.id} style={{
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                        }}>
                            <Item opacity={1} item={item}/>
                        </div>) : (<div key={Math.random()} style={{
                        opacity: 0,
                        maxHeight: 34,
                        maxWidth: 34,
                        minHeight: 34,
                        minWidth: 34,
                        border: '1px solid black',
                        borderRadius: '2px',
                        margin: '2px 3px 0 0'
                    }}/>)))}
                </div>
            })}
        </div>
    </div>)
}

function HandleMantras({viewItems}) {
    let mantraNames = [];

    if (viewItems[0].getType === 'mantra-radiant') {
        mantraNames = ['Djatra', 'Dhana', 'Shaprah', 'Jadumba', 'Badra', 'Pranah', 'Idhara', 'Farnah', 'Jola', 'Jolja', 'Dsharan', 'dhana', 'parla', 'ilan', 'rashna', 'Dalmahash', 'Fadahal', 'Faradja', 'Tarte'];
    } else if (viewItems[0].getType === 'mantra-dire') {
        mantraNames = ['Ezhankah', 'Arnala', 'Trasha', 'opakha', 'razhhak', 'Dahadja', 'Tazhhaphar', 'Orapah', 'Yokatha', 'rashna', 'ilan', 'parla', 'dhana'];
    } else {
        viewItems.forEach(item => {
            const firstWord = item.nameEng.split(" ")[0];

            if (!mantraNames.includes(firstWord)) {
                mantraNames.push(firstWord);
            }
        })
    }


    return (<div style={{display: 'flex'}}>
        <Stack style={{height: 585, display: 'flex', flexDirection: 'column', marginRight: 16, marginLeft: 16}}>
            <div className="numbers numbers-35">
                I
            </div>
            <div className="numbers numbers-35">
                II
            </div>
            <div className="numbers numbers-35">
                III
            </div>
            <div className="numbers numbers-35">
                IV
            </div>
            <div className="numbers numbers-35">
                V
            </div>
            <div className="numbers numbers-35">
                VI
            </div>
            <div className="numbers numbers-35">
                VII
            </div>
            <div className="numbers numbers-35">
                VIII
            </div>
            <div className="numbers numbers-35">
                IX
            </div>
            <div className="numbers numbers-35">
                X
            </div>
            <div className="numbers numbers-35">
                XI
            </div>
            <div className="numbers numbers-35">
                XII
            </div>
        </Stack>
        <div style={{display: 'flex', marginRight: 16}}>
            {mantraNames.map(mantraName => {
                const thisItems = [];
                viewItems.map(item => {
                    if (item.nameEng.includes(mantraName)) {
                        thisItems.push(item);
                    }
                    if (item.getType === 'mantra-radiant') {
                        if (mantraName === 'Pranah') {
                            if (item.nameEng.includes('Saptak') || item.nameEng.includes('prata')) {
                                thisItems.push(item);
                            }
                        }
                        if (mantraName === 'Badra') {
                            if (item.nameEng.includes('Jadar')) {
                                thisItems.push(item);
                            }
                        }
                        if (mantraName === 'Idhara') {
                            if (item.nameEng.includes('mayha')) {
                                thisItems.push(item);
                            }
                        }
                        if (mantraName === 'Dalmahash') {
                            if (item.nameEng.includes('raspana')) {
                                thisItems.push(item);
                            }
                        }
                    }

                })

                const numbers = [];

                thisItems.forEach(item => {
                    if (!numbers.includes(item.level)) {
                        numbers.push(item.level);
                    }
                });


                for (let i = 1; i < 12; i++) {
                    if (!numbers.includes(i)) {
                        thisItems.push({level: i})
                    }
                }

                thisItems.sort((a, b) => a.level - b.level);

                return <div key={mantraName + Math.random()} style={{
                    display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxHeight: 470
                }}>
                    {thisItems.map(item => (('id' in item) ? (
                        <div className="items-item-slot contains-item" style={{
                            borderRadius: '2px', margin: '1px 0 0 0',
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                        }} key={item.id + Math.random()}>
                            <Item opacity={1} item={item}/>
                        </div>) : (<div style={{
                        opacity: 0,
                        maxHeight: 34,
                        maxWidth: 34,
                        minHeight: 34,
                        minWidth: 34,
                        borderRadius: '2px',
                        margin: '1px 1px 0 0'
                    }} key={Math.random()}/>)))}
                </div>
            })}
        </div>
    </div>)
}

function HandleProfession({viewItems}) {
    const guilds = viewItems.filter(item => item.typeNameEng === 'Guild');
    const abilities = viewItems.filter(item => item.typeNameEng === 'Ability');
    const otherItems = viewItems.filter(item => item.typeNameEng !== 'Ability' && item.typeNameEng !== 'Guild');
    const abilityNames = [];
    const otherNames = [];

    abilities.forEach(ability => {
        if (!abilityNames.includes(ability.nameEng)) {
            abilityNames.push(ability.nameEng);
        }
    })

    otherItems.map(item => {
        if (!otherNames.includes(item.typeNameEng)) {
            otherNames.push(item.typeNameEng);
        }
    })

    return (<div style={{display: 'flex'}}>
        <Stack style={{height: 585, display: 'flex', flexDirection: 'column', marginRight: 16, marginLeft: 16}}>
            <div className="numbers numbers-38">
                I
            </div>
            <div className="numbers numbers-38">
                II
            </div>
            <div className="numbers numbers-38">
                III
            </div>
            <div className="numbers numbers-38">
                IV
            </div>
            <div className="numbers numbers-38">
                V
            </div>
            <div className="numbers numbers-38">
                VI
            </div>
        </Stack>
        <div style={{display: 'flex', marginTop: 3}}>
            <div style={{display: 'flex', marginRight: 16}}>
                <div style={{
                    display: 'flex', flexDirection: 'column', flexWrap: 'wrap'
                }}>
                    {guilds.map(guild => (<div className="items-item-slot contains-item" key={guild.id} style={{
                        background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                    }}>
                        <Item item={guild}/>
                    </div>))}
                </div>
            </div>
            <div style={{display: 'flex', marginRight: 16}}>
                {abilityNames.map(abilityName => (<div key={abilityName} style={{
                    display: 'flex', flexDirection: 'column', flexWrap: 'wrap'
                }}>
                    {abilities.map(ability => ((abilityName === ability.nameEng) && (
                        <div className="items-item-slot contains-item" key={ability.id} style={{
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                        }}>
                            <Item item={ability}/>
                        </div>)))}
                </div>))}
            </div>
            <div style={{display: 'flex', marginRight: 16}}>
                {otherNames.map(otherName => {
                    if (otherName === 'Cuirass/Robe' || otherName === 'Helmet' || otherName === 'Belt' || otherName === 'Shield' || otherName === 'Mantra' || otherName === 'Ring' || (otherName === 'Weapon' && otherItems[0].reqProfessionNameEng === 'Armorer') || (otherName === 'Weapon' && otherItems[0].reqProfessionNameEng === 'Necromancer') || otherName === 'Shield') {
                        const thisItems = [];

                        otherItems.map(item => {
                            if (item.typeNameEng === otherName) {
                                thisItems.push(item);
                            }
                        })

                        const numbers = [];

                        thisItems.forEach(item => {
                            if (!numbers.includes(item.reqProfessionLvl)) {
                                numbers.push(item.reqProfessionLvl);
                            }
                        });

                        for (let i = 1; i < 7; i++) {
                            if (!numbers.includes(i)) {
                                thisItems.push({reqProfessionLvl: i})
                            }
                        }

                        thisItems.sort((a, b) => a.reqProfessionLvl - b.reqProfessionLvl);

                        return <div key={otherName + Math.random()} style={{
                            display: 'flex', flexDirection: 'column', flexWrap: 'wrap'
                        }}>
                            {thisItems.map(item => (('id' in item) ? (
                                <div className="items-item-slot contains-item" key={'Profession' + item.id} style={{
                                    background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                                }}>
                                    <Item opacity={1} item={item}/>
                                </div>) : (<div style={{
                                opacity: 0,
                                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                            }} className="items-item-slot" key={'Profession-none-' + Math.random()}/>)))}
                        </div>
                    } else {
                        const thisItems = [];

                        otherItems.map(item => {
                            if (item.typeNameEng === otherName) {
                                thisItems.push(item);
                            }
                        })
                        const words = [];

                        thisItems.forEach(item => {
                            const name = item.nameEng.split(' ');

                            if (!words.includes(name[name.length - 1])) {
                                words.push(name[name.length - 1]);
                            }
                        })

                        return <div style={{display: 'flex', flexDirection: 'row'}} key={otherName}>
                            {
                                words.map((word, index) => {
                                    const thisThisItems = [];

                                    thisItems.forEach(item => {
                                        if (item.nameEng.includes(words[index])) {
                                            if (!thisThisItems.includes(item)) {
                                                thisThisItems.push(item);
                                            }
                                        }
                                    })

                                    const numbers = [];
                                    thisThisItems.forEach(item => {
                                        if (!numbers.includes(item.reqProfessionLvl)) {
                                            numbers.push(item.reqProfessionLvl);
                                        }
                                    });

                                    for (let i = 1; i < 7; i++) {
                                        if (!numbers.includes(i)) {
                                            thisThisItems.push({reqProfessionLvl: i})
                                        }
                                    }

                                    thisThisItems.sort((a, b) => a.reqProfessionLvl - b.reqProfessionLvl);

                                    return <div key={word + otherName} style={{
                                        display: 'flex', flexDirection: 'column', flexWrap: 'wrap'
                                    }}> {

                                        thisThisItems.map(thisItem => (('id' in thisItem) ? (
                                            <div className="items-item-slot contains-item" key={thisItem.id} style={{
                                                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                                            }}>
                                                <Item opacity={1} item={thisItem}/>
                                            </div>) : (
                                            <div key={'profession-' + Math.random()} style={{
                                                opacity: 0,
                                                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                                            }} className="items-item-slot"/>)))}
                                    </div>
                                })}
                        </div>
                    }
                })}
            </div>
        </div>
    </div>)
}

function HandleRegular({viewItems, prefix}) {
    let initialNumber = 1;
    let transition = false;
    const heightNumber = viewItems[0].typeNameEng === 'Ring' ? 470 : 585;
    let count = 0

    return (<div style={{display: 'flex'}}>
        <Stack style={{
            height: heightNumber, display: 'flex', flexDirection: 'column', marginRight: 16, marginLeft: 16
        }}>
            <div className="numbers">
                I
            </div>
            <div className="numbers">
                II
            </div>
            <div className="numbers">
                III
            </div>
            <div className="numbers">
                IV
            </div>
            <div className="numbers">
                V
            </div>
            <div className="numbers">
                VI
            </div>
            <div className="numbers">
                VII
            </div>
            <div className="numbers">
                VIII
            </div>
            <div className="numbers">
                IX
            </div>
            <div className="numbers">
                X
            </div>
            <div className="numbers">
                XI
            </div>
            <div className="numbers">
                XII
            </div>
            {viewItems[0].typeNameEng !== 'Ring' && (<div>
                <div className="numbers">
                    XIII
                </div>
                <div className="numbers">
                    XIV
                </div>
                <div className="numbers">
                    XV
                </div>
            </div>)}

        </Stack>
        <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'start', height: heightNumber, width: '500px',
            marginTop: 3
        }}>
            {viewItems.map((item, index) => {
                ++count;
                let marginRight = 4;

                if (index + 1 < viewItems.length && item.level !== viewItems[index + 1].level) {
                    marginRight = `calc(100% - ${40 * count}px)`;
                    count = 0;
                }

                item.prefix = prefix ? prefix : null;

                return (<div key={item.id} className="items-item-slot contains-item"
                             style={{
                                 marginRight: marginRight,
                                 background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                             }}>
                    <Item item={item} prefix={prefix}/>
                </div>)
            })}
        </div>
    </div>)
}

function HandleCastle({viewItems, prefix, eng, prefixes}) {
    const othersNames = eng ? ['Katana', 'Robe', 'Armor', 'Jewerly'] : ['Катана', 'Роба', 'Броня', 'Бижутерия'];

    return (<div style={{display: 'flex'}}>
        <div style={{display: 'flex', flexDirection: 'column', marginRight: 16, marginLeft: 16}}>
            {othersNames.map(othersName => {
                return <div key={othersName} className="numbers numbers-other">
                    {othersName}
                </div>
            })}
        </div>
        <div style={{marginTop: 3}}>
            {othersNames.map((othersName, index) => (<div key={othersName} style={{display: 'flex'}}>
                {viewItems.map(item => {
                    if (index === 0 && item.typeNameEng === 'Weapon') {
                        item.prefix = (prefix?.id >= 114 && prefix?.id <= 122) ? prefix : null;

                        return (
                            <div className="items-item-slot contains-item" key={item.id} style={{
                                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                            }}>
                                <Item key={item.id + Math.random()} item={item} prefix={prefix}/>
                            </div>)
                    }
                    if (index === 1 && item.typeNameEng === 'Cuirass/Robe') {
                        const thisPrefix = prefixes.filter(prefix => prefix.nameEng === 'rule');
                        item.prefix = thisPrefix[0];

                        if (item.level === 12) {
                            if (!item.nameEng.includes('robe')) {
                                return (<div className="items-item-slot contains-item" key={item.id} style={{
                                    background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                                }}>
                                    <Item key={item.id + Math.random()} item={item} prefix={prefix}/>
                                </div>)
                            }
                        } else if (item.level === 13 || item.level === 14) {
                            if (item.nameEng.includes('robe')) {
                                return (<div className="items-item-slot contains-item" key={item.id} style={{
                                    background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                                }}>
                                    <Item key={item.id + Math.random()} item={item} prefix={prefix}/>
                                </div>)
                            }
                        } else if (item.level === 15) {
                            if (!item.nameEng.includes('Red') && !item.nameEng.includes('White')) {
                                return (<div className="items-item-slot contains-item" key={item.id} style={{
                                    background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                                }}>
                                    <Item key={item.id + Math.random()} item={item} prefix={prefix}/>
                                </div>)
                            }
                        } else {
                            return (<div className="items-item-slot contains-item" key={item.id} style={{
                                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                            }}>
                                <Item key={item.id + Math.random()} item={item} prefix={prefix}/>
                            </div>)
                        }
                    }
                    if (index === 2 && (item.typeNameEng !== 'Weapon' && item.typeNameEng !== 'Cuirass/Robe'
                        && item.typeNameEng !== 'Ring' && item.typeNameEng !== 'Amulet' && item.typeNameEng !== 'Bracelet')) {

                        item.prefix = (prefix?.id >= 109 && prefix?.id <= 112) ? prefix : null;

                        return (<div className="items-item-slot contains-item" key={item.id} style={{
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                        }}>
                            <Item key={item.id + Math.random()} item={item} prefix={prefix}/>
                        </div>)
                    }
                    if (index === 3 && (item.typeNameEng === 'Ring' || item.typeNameEng === 'Amulet' || item.typeNameEng === 'Bracelet')) {
                        item.prefix = (prefix?.id >= 109 && prefix?.id <= 112) ? prefix : null;

                        return (<div className="items-item-slot contains-item" key={item.id} style={{
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                        }}>
                            <Item key={item.id + Math.random()} item={item} prefix={prefix}/>
                        </div>)
                    }
                })}
            </div>))}
        </div>
    </div>)
}

function HandlePrefixes({eng, currentPrefix, prefixes}) {
    const buttons = useSelector(selectButtons);
    const dispatch = useDispatch();

    useEffect(() => {
        checkPrefixList();
    })

    const checkPrefixList = () => {
        let isInPrefixList = false;

        prefixes.forEach(prefix => {
            if (currentPrefix?.id === prefix.id) {
                isInPrefixList = true;
            }
        })

        if (!isInPrefixList) {
            dispatch(unsetPrefix());
        }
    }

    eng ? prefixes.sort((a, b) => a.nameEng.localeCompare(b.nameEng)) : prefixes.sort((a, b) => a.nameRu.localeCompare(b.nameRu));

    const handlePrefixSelect = (e) => {
        const result = prefixes.filter((prefix) => 'prefix-id-' + prefix.id === e.target.id);
        dispatch(setPrefix(result[0]));
    }

    const handleUnset = () => {
        dispatch(unsetPrefix())
    }

    return <div style={{display: 'flex', flexDirection: 'column', width: 180, marginRight: 16}}>
        {
            <Button className={currentPrefix ? "prefix-button" : "prefix-button selected-prefix"} onClick={handleUnset}>
                {buttons.noPrefix}
            </Button>
        }
        {prefixes.map(prefix => (
            <Button
                className={prefix.id === currentPrefix?.id ? "prefix-button selected-prefix" : "prefix-button"}
                key={'prefix-id-' + prefix.id}
                id={'prefix-id-' + prefix.id}
                sx={{p: 3, pt: 0, pb: 0, fontWeight: 'bold'}}
                onClick={handlePrefixSelect}>
                {eng ? prefix.nameEng : prefix.nameRu}
            </Button>))}
    </div>
}

const Items = ({items, prefixes}) => {
    const eng = useSelector(selectLang);
    const prefix = useSelector(selectPrefix);

    const makeObjectCopy = (object) => {
        const newObject = {};
        Object.assign(newObject, object);

        return newObject;
    }

    const handleMap = () => {
        const viewItems = [];

        items.forEach(item => {
            viewItems.push(makeObjectCopy(item))
        })

        switch (viewItems[0].getType) {
            case 'assassin':
            case 'barbarian':
            case 'blacksmith':
            case 'thief':
            case 'archmage':
            case 'druid':
            case 'inquisitor':
            case 'sorcerer':
            case 'necromancer':
            case 'bandier':
            case 'crusader':
            case 'steel-master':
            case 'armorer':
            case 'hunter':
                return (<HandleProfession viewItems={viewItems}/>);
            case 'mantra-radiant':
            case 'mantra-dire':
            case 'radiant-useless':
            case 'dire-useless':
                return (<HandleMantras viewItems={viewItems}/>);
            case 'powder-earth':
            case 'powder-air':
            case 'powder-water':
            case 'powder-fire':
                return (<HandlePowder viewItems={viewItems}/>);
            case 'crystals':
                return (<HandleCrystals viewItems={viewItems}/>);
            case 'castle15':
            case 'castle30':
            case 'castle45':
            case 'castle60':
            case 'castle75':
            case 'castle90':
            case 'castle120':
                return (<HandleCastle viewItems={viewItems} eng={eng} prefix={prefix} prefixes={prefixes}/>);
            case 'event':
            case 'premium':
                return (<HandleOthers viewItems={viewItems} eng={eng}/>);
            default:
                return (<HandleRegular viewItems={viewItems} prefix={prefix}/>);
        }
    }

    return (<div style={{
        display: 'flex', justifyContent: 'space-between', marginTop: 16
    }}>
        <div>
            {handleMap()}
        </div>
        {(prefixes && prefixes.length > 0) && (<HandlePrefixes eng={eng} currentPrefix={prefix} prefixes={prefixes}/>)}
    </div>)
};

export default Items;